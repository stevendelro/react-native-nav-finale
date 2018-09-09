import { EMAIL_CHANGED } from '../actions/index';

const INITIAL_STATE = { email: '' };

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case EMAIL_CHANGED:
      return { ...state, email: payload };
    default:
      return state;
  }
};
