import { EDIT_EMPLOYEE } from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case EDIT_EMPLOYEE:
      return {
        ...state,
        [payload.prop]: payload.value
      };
    default:
      return state;
  }
};
