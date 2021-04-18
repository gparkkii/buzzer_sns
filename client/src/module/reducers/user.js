export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const LOG_IN = 'LOG_IN';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const LOG_OUT = 'LOG_OUT';

export const signUpAction = data => {
  return {
    type: SIGN_UP,
    data,
  };
};

export const signUpSuccess = {
  type: SIGN_UP_SUCCESS,
};

export const loginAction = data => {
  return {
    type: LOG_IN,
    data,
  };
};
export const logoutAction = {
  type: LOG_OUT,
};
export const signUp = data => {
  return {
    type: SIGN_UP,
    data,
  };
};

const dummyUser = {
  id: 1,
  nickname: '박지연',
  Posts: [],
  Followings: [],
  Followers: [],
};

const initialState = {
  isLoggedIn: false,
  user: {},
  signUpData: {},
  loginData: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        isLoggedIn: true,
        user: dummyUser,
        loginData: action.data,
      };
    }
    case LOG_OUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: {},
      };
    }
    case SIGN_UP: {
      return {
        ...state,
        signUpData: action.data,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
