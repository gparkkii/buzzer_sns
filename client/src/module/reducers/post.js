import shortId from 'shortid';
import faker from 'faker';

import { produce } from 'immer';

export const initialState = {
  mainPosts: [
    {
      id: 0, // mainpost id
      User: {
        id: 0, // user id
        nickname: '보노보노',
      },
      content:
        '계속 성장하는 개발자 박지연입니다. #개발자 #프론트엔드 #코딩공부 #프로그래밍#천재',
      Images: [
        {
          src:
            'https://avatars.githubusercontent.com/u/71811780?s=400&u=8b77fedf491604b40fc6e0f7ef4010bae78de38d&v=4',
        },
        {
          src:
            'https://media.vlpt.us/images/gparkkii/profile/a82678c3-c609-4c0f-a866-d1bbb8db1ba4/progileimage.jpg?w=400',
        },
      ],
      Comments: [
        {
          id: 0, // comment id
          User: {
            id: 0, // user id
            nickname: '보노보노',
          },
          content: '힘내세요~',
        },
        {
          id: shortId.generate(),
          User: {
            nickname: '도라에몽',
          },
          content: '화이팅~',
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
  addPostLoading: false,
  addPostDone: false,
  addPostError: false,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
};

const dummyPost = data => ({
  id: data.id,
  content: data.content,
  User: {
    id: 0,
    nickname: '보노보노',
  },
  Images: [],
  Comments: [],
});

const dummyComment = data => ({
  id: data.id,
  content: data.content.comment,
  User: {
    id: 0,
    nickname: '보노보노',
  },
});

export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const REMOVE_COMMENT_REQUEST = 'REMOVE_COMMENT_REQUEST';
export const REMOVE_COMMENT_SUCCESS = 'REMOVE_COMMENT_SUCCESS';
export const REMOVE_COMMENT_FAILURE = 'REMOVE_COMMENT_FAILURE';

export const addPostAction = data => ({
  type: ADD_POST_REQUEST,
  data,
});

export const addCommentAction = data => ({
  type: ADD_COMMENT_REQUEST,
  data,
});

export const removePostAction = data => ({
  type: REMOVE_POST_REQUEST,
  data,
});

export const removeCommentAction = data => ({
  type: REMOVE_COMMENT_REQUEST,
  data,
});

export default (prevState = initialState, action) => {
  return produce(prevState, draft => {
    switch (action.type) {
      case LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;
      case LOAD_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.mainPosts = action.data.concat(draft.mainPosts);
        draft.hasMorePosts = draft.mainPosts.length < 50;
        break;
      case LOAD_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
      case ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.mainPosts.unshift(dummyPost(action.data));
        break;
      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;
      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;
      case ADD_COMMENT_SUCCESS: {
        const post = draft.mainPosts.find(
          v => v.id === action.data.content.postId,
        );
        post.Comments.unshift(dummyComment(action.data));
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;
      }
      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;
      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;
      case REMOVE_POST_SUCCESS:
        draft.removePostLoading = false;
        draft.removePostDone = true;
        draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data);
        break;
      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;
      case REMOVE_COMMENT_REQUEST:
        draft.removeCommentLoading = true;
        draft.removeCommentDone = false;
        draft.removeCommentError = null;
        break;
      case REMOVE_COMMENT_SUCCESS: {
        const post = draft.mainPosts.find(v => v.id === action.data.postId);
        post.Comments = post.Comments.filter(v => v.id !== action.data.commentId);
        draft.removeCommentLoading = false;
        draft.removeCommentDone = true;
        break;
      }
      case REMOVE_COMMENT_FAILURE:
        draft.removeCommentLoading = false;
        draft.removeCommentError = action.error;
        break;
      default:
        break;
    }
  });
};

