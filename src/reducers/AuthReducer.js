import { EMAIL_CHANGED, PASSWORD_CHANGED } from '../actions/types';

const INITIAL_STATE = { email: '', password: '' };

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case EMAIL_CHANGED:
      return { ...state, email: payload };
    
    case PASSWORD_CHANGED:
      return { ...state, password: payload };

    default:
      return state;
  }
};
