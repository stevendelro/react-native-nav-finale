import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EDIT_EMPLOYEE,
  ADD_NEW_EMPLOYEE,
  FETCH_EMPLOYEES_SUCCESS,
  SAVE_EMPLOYEES_SUCCESS
} from './types';

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

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();
  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({
          type: FETCH_EMPLOYEES_SUCCESS,
          payload: snapshot.val()
        });
      });
  };
};

export const saveEmployee = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();
  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        dispatch({
          type: SAVE_EMPLOYEES_SUCCESS
        });
        Actions.employeeList();
      });
  };
};
