const dummyUser = {
  id: 1,
  nickname: '박지연',
  Posts: [],
  Followings: [],
  Followers: [],
};

const initialState = {
  loginLoading: false,
  loginDone: false,
  loginError: false,
  logoutLoading: false,
  logoutDone: false,
  logoutError: false,
  signupLoading: false,
  signupDone: false,
  signupError: false,
  followLoading: false,
  followDone: false,
  followError: null,
  unfollowLoading: false,
  unfollowDone: false,
  unfollowError: null,
  changeNicknameLoading: false,
  changeNicknameDone: false,
  changeNicknameError: null,
  user: {},
  signUpData: {},
  loginData: {},
};

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
export const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
export const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';

export const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';

export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

export const signUpRequestAction = data => {
  return {
    type: SIGN_UP_REQUEST,
    data,
  };
};

export const signUpRequestSuccess = {
  type: SIGN_UP_SUCCESS,
};

export const loginRequestAction = data => {
  return {
    type: LOG_IN_REQUEST,
    data,
  };
};

export const logoutRequestAction = {
  type: LOG_OUT_REQUEST,
};

export default (prevState = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST: {
      return {
        ...prevState,
        loginLoading: true,
        loginDone: false,
        logInError: null,
      };
    }
    case LOG_IN_SUCCESS: {
      return {
        ...prevState,
        loginLoading: false,
        loginDone: true,
        user: dummyUser,
        loginData: action.data,
      };
    }
    case LOG_IN_FAILURE: {
      return {
        ...prevState,
        loginLoading: false,
        logInError: action.error,
      };
    }
    case LOG_OUT_REQUEST: {
      return {
        ...prevState,
        logoutLoading: true,
        logoutDone: false,
        logoutError: null,
      };
    }
    case LOG_OUT_SUCCESS: {
      return {
        ...prevState,
        logoutLoading: false,
        logoutDone: true,
        user: {},
      };
    }
    case LOG_OUT_FAILURE: {
      return {
        ...prevState,
        logoutLoading: false,
        logoutError: action.error,
      };
    }
    case SIGN_UP_REQUEST: {
      return {
        ...prevState,
        signupLoading: true,
        signupDone: false,
        signupError: null,
      };
    }
    case SIGN_UP_SUCCESS: {
      return {
        ...prevState,
        signupLoading: false,
        signupDone: true,
      };
    }
    case SIGN_UP_FAILURE: {
      return {
        ...prevState,
        signupLoading: false,
        signupError: action.error,
      };
    }
    case FOLLOW_REQUEST: {
      return {
        ...prevState,
        followLoading: true,
        followDone: false,
        followError: null,
      };
    }
    case FOLLOW_SUCCESS: {
      return {
        ...prevState,
        followLoading: false,
        followDone: true,
      };
    }
    case FOLLOW_FAILURE: {
      return {
        ...prevState,
        followLoading: false,
        followError: action.error,
      };
    }
    case UNFOLLOW_REQUEST: {
      return {
        ...prevState,
        unfollowLoading: true,
        unfollowDone: false,
        unfollowError: null,
      };
    }
    case UNFOLLOW_SUCCESS: {
      return {
        ...prevState,
        unfollowLoading: false,
        unfollowDone: true,
      };
    }
    case UNFOLLOW_FAILURE: {
      return {
        ...prevState,
        unfollowLoading: false,
        unfollowError: action.error,
      };
    }
    case CHANGE_NICKNAME_REQUEST: {
      return {
        ...prevState,
        changeNicknameLoading: true,
        changeNicknameDone: false,
        changeNicknameError: null,
      };
    }
    case CHANGE_NICKNAME_SUCCESS: {
      return {
        ...prevState,
        changeNicknameLoading: false,
        changeNicknameDone: true,
      };
    }
    case CHANGE_NICKNAME_FAILURE: {
      return {
        ...prevState,
        changeNicknameLoading: false,
        changeNicknameError: action.error,
      };
    }
    case ADD_POST_TO_ME:
      return {
        ...prevState,
        me: {
          ...prevState.me,
          Posts: [{ id: action.data }, ...prevState.me.Posts],
        },
      };
    case REMOVE_POST_OF_ME:
      return {
        ...prevState,
        me: {
          ...prevState.me,
          Posts: prevState.me.Posts.filter(v => v.id !== action.data),
        },
      };
    default: {
      return {
        ...prevState,
      };
    }
  }
};