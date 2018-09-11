import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EDIT_EMPLOYEE, ADD_NEW_EMPLOYEE } from './types';

export const editEmployee = ({ prop, value }) => {
  return {
    type: EDIT_EMPLOYEE,
    payload: { prop, value }
  };
};

export const addNewEmployee = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();
  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: ADD_NEW_EMPLOYEE });
        Actions.employeeList();
      });
  };
};
