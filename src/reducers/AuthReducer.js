import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false,
  error: '',
  user: null
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  
  switch (type) {
    case EMAIL_CHANGED:
      return { ...state, email: payload };
    case PASSWORD_CHANGED:
      return { ...state, password: payload };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: payload, error: '' };
    case LOGIN_USER_FAILED:
      return { ...state, error: 'Authentication Failed!', password: '' };
    default:
      return state;
  }
};
