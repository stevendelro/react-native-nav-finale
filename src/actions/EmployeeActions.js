import { EDIT_EMPLOYEE } from './types';

export const EditEmployee = ({ prop, value }) => {
  return {
    type: EDIT_EMPLOYEE,
    payload: { prop, value }
  };
};
