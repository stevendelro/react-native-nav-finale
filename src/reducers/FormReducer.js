import { EDIT_EMPLOYEE, ADD_NEW_EMPLOYEE } from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_NEW_EMPLOYEE:
      return INITIAL_STATE;
    case EDIT_EMPLOYEE:
      return {
        ...state,
        [payload.prop]: payload.value
      };
    default:
      return state;
  }
};
