import { EDIT_EMPLOYEE } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};
