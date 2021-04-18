export const initialState = {
  mainPosts: [
    {
      id: 0,
      User: {
        id: 0,
        nickname: '',
      },
      content: '',
      Images: [],
      Comments: [
        {
          User: {
            nickname: '',
          },
          content: '',
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = 'ADD_POST';

export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 1,
  User: {
    id: 1,
    nickname: '박지연',
  },
  content: '계속 성장하는 개발자 박지연입니다.',
  Images: [],
  Comments: [
    {
      User: {
        nickname: '보노보노',
      },
      content: '힘내세요~',
    },
    {
      User: {
        nickname: '도라에몽',
      },
      content: '화이팅~',
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
