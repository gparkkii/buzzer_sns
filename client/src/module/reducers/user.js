import { produce } from 'immer';

const dummyUser = data => ({
  id: 0,
  email: data.user.email,
  name: '박지연',
  nickname: '보노보노',
  Posts: [{ id: 0 }],
  Comments: [{ id: 0 }],
  Followings: [
    { nickname: '지파키' },
    { nickname: '푸우' },
    { nickname: '피글렛' },
  ],
  Followers: [
    { nickname: '지파키' },
    { nickname: '푸우' },
    { nickname: '피글렛' },
    { nickname: '진구' },
  ],
});

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

export const ADD_POST_TO_USER = 'ADD_POST_TO_USER';
export const REMOVE_POST_OF_USER = 'REMOVE_POST_OF_USER';
export const ADD_COMMENT_TO_USER = 'ADD_COMMENT_TO_USER';
export const REMOVE_COMMENT_OF_USER = 'REMOVE_COMMENT_OF_USER';

export const signupRequestAction = data => {
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
  return produce(prevState, draft => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.loginLoading = true;
        draft.loginError = null;
        draft.loginDone = false;
        break;
      case LOG_IN_SUCCESS:
        draft.loginLoading = false;
        draft.user = dummyUser(action.data);
        draft.loginDone = true;
        break;
      case LOG_IN_FAILURE:
        draft.loginLoading = false;
        draft.loginError = action.error;
        break;
      case LOG_OUT_REQUEST:
        draft.logoutLoading = true;
        draft.logoutError = null;
        draft.logoutDone = false;
        break;
      case LOG_OUT_SUCCESS:
        draft.logoutLoading = false;
        draft.logoutDone = true;
        draft.user = {};
        break;
      case LOG_OUT_FAILURE:
        draft.logoutLoading = false;
        draft.logoutError = action.error;
        break;
      case SIGN_UP_REQUEST:
        draft.signupLoading = true;
        draft.signupError = null;
        draft.signupDone = false;
        break;
      case SIGN_UP_SUCCESS:
        draft.signupLoading = false;
        draft.signupDone = true;
        break;
      case SIGN_UP_FAILURE:
        draft.signupLoading = false;
        draft.signupError = action.error;
        break;
      case FOLLOW_REQUEST:
        draft.followLoading = true;
        draft.followError = null;
        draft.followDone = false;
        break;
      case FOLLOW_SUCCESS:
        draft.followLoading = false;
        draft.user.Followings.push({ id: action.data });
        draft.followDone = true;
        break;
      case FOLLOW_FAILURE:
        draft.followLoading = false;
        draft.followError = action.error;
        break;
      case UNFOLLOW_REQUEST:
        draft.unfollowLoading = true;
        draft.unfollowError = null;
        draft.unfollowDone = false;
        break;
      case UNFOLLOW_SUCCESS:
        draft.unfollowLoading = false;
        draft.user.Followings = draft.user.Followings.filter(
          v => v.id !== action.data,
        );
        draft.unfollowDone = true;
        break;
      case UNFOLLOW_FAILURE:
        draft.unfollowLoading = false;
        draft.unfollowError = action.error;
        break;
      case CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = true;
        draft.changeNicknameError = null;
        draft.changeNicknameDone = false;
        break;
      case CHANGE_NICKNAME_SUCCESS:
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        break;
      case CHANGE_NICKNAME_FAILURE:
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;
      case ADD_POST_TO_USER:
        draft.user.Posts.unshift({ id: action.data });
        break;
      case REMOVE_POST_OF_USER:
        draft.user.Posts = draft.user.Posts.filter(v => v.id !== action.data);
        break;
      case ADD_COMMENT_TO_USER:
        draft.user.Comments.unshift({ id: action.data.id });
        break;
      case REMOVE_COMMENT_OF_USER:
        draft.user.Comments = draft.user.Comments.filter(
          v => v.id !== action.data,
        );
        break;
      default:
        break;
    }
  });
};
