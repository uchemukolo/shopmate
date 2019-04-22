import {
  SIGNUP_USER,
  SIGNUP_USER_ERROR,
  LOGIN_USER,
  LOGIN_USER_ERROR,
  LOGOUT_USER
} from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {},
  error: {}
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SIGNUP_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.user
      };
    case SIGNUP_USER_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        error: action.error
      };
    case LOGIN_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.user
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        error: action.error
      };
    case LOGOUT_USER:
      return {
        ...state
      };
    default:
      return state;
  }
};
