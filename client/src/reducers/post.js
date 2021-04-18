export const initialState = {
  mainPosts: [
    {
      id: 0,
      User: {
        id: 0,
        nickname: '',
      },
      content: '',
      Images: [
        {
          src:
            'https://avatars.githubusercontent.com/u/71811780?s=400&u=8b77fedf491604b40fc6e0f7ef4010bae78de38d&v=4',
        },
        {
          src:
            'https://avatars.githubusercontent.com/u/71811780?s=400&u=8b77fedf491604b40fc6e0f7ef4010bae78de38d&v=4',
        },
        {
          src:
            'https://avatars.githubusercontent.com/u/71811780?s=400&u=8b77fedf491604b40fc6e0f7ef4010bae78de38d&v=4',
        },
      ],
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
  Images: [
    {
      src:
        'https://media.vlpt.us/images/gparkkii/profile/a82678c3-c609-4c0f-a866-d1bbb8db1ba4/progileimage.jpg?w=400',
    },
  ],
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
