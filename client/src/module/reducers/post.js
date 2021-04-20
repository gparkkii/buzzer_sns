import shortId from 'shortid';

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
  switch (action.type) {
    case ADD_POST_REQUEST: {
      return {
        ...prevState,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null,
      };
    }
    case ADD_POST_SUCCESS: {
      return {
        ...prevState,
        mainPosts: [dummyPost(action.data), ...prevState.mainPosts],
        postAdded: true,
        addPostLoading: false,
        addPostDone: true,
      };
    }
    case ADD_POST_FAILURE: {
      return {
        ...prevState,
        addPostLoading: false,
        addPostError: action.error,
      };
    }
    case ADD_COMMENT_REQUEST: {
      return {
        ...prevState,
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null,
      };
    }
    case ADD_COMMENT_SUCCESS: {
      const postIndex = prevState.mainPosts.findIndex(
        v => v.id === action.data.content.postId,
      );
      const post = { ...prevState.mainPosts[postIndex] };
      post.Comments = [dummyComment(action.data), ...post.Comments];
      const mainPosts = [...prevState.mainPosts];
      mainPosts[postIndex] = post;
      return {
        ...prevState,
        mainPosts,
        addCommentLoading: false,
        addCommentDone: true,
      };
    }
    case ADD_COMMENT_FAILURE: {
      return {
        ...prevState,
        addCommentLoading: false,
        addCommentError: action.error,
      };
    }
    case REMOVE_POST_REQUEST: {
      return {
        ...prevState,
        removePostLoading: true,
        removePostDone: false,
        removePostError: null,
      };
    }
    case REMOVE_POST_SUCCESS: {
      return {
        ...prevState,
        mainPosts: prevState.mainPosts.filter(v => v.id !== action.data),
        removePostLoading: false,
        removePostDone: true,
      };
    }
    case REMOVE_POST_FAILURE: {
      return {
        ...prevState,
        removePostLoading: false,
        removePostError: action.error,
      };
    }
    case REMOVE_COMMENT_REQUEST: {
      return {
        ...prevState,
        removeCommentLoading: true,
        removeCommentDone: false,
        removeCommentError: null,
      };
    }
    case REMOVE_COMMENT_SUCCESS: {
      const postIndex = prevState.mainPosts.findIndex(
        v => v.id === action.data.postId,
      );
      const post = { ...prevState.mainPosts[postIndex] };
      post.Comments = post.Comments.filter(v => v.id !== action.data.commentId);
      const mainPosts = [...prevState.mainPosts];
      mainPosts[postIndex] = post;

      return {
        ...prevState,
        mainPosts,
        removeCommentLoading: false,
        removeCommentDone: true,
      };
    }
    case REMOVE_COMMENT_FAILURE: {
      return {
        ...prevState,
        removeCommentLoading: false,
        removeCommentError: action.error,
      };
    }
    default: {
      return {
        ...prevState,
      };
    }
  }
};
