import { FETCH_EMPLOYEES_SUCCESS } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  
  switch (type) {
    case FETCH_EMPLOYEES_SUCCESS:
      return payload;
    default:
      return state;
  }
};
