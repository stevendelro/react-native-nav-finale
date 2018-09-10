import { EDIT_EMPLOYEE } from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  const { prop, value } = payload;

  switch (type) {
    case EDIT_EMPLOYEE:
      return {
        ...state,
        [prop]: value
      };
    default:
      return state;
  }
};
