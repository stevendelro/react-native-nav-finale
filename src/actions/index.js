import firebase from 'firebase';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS } from './types';

export const emailChanged = email => {
  return {
    type: EMAIL_CHANGED,
    payload: email
  };
};

export const passwordChanged = password => {
  return {
    type: PASSWORD_CHANGED,
    payload: password
  };
};

export const loginUser = ({ email, password }) => {
  return dispatch => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch({
          type: LOGIN_USER_SUCCESS,
          payload: user
        });
      })
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => {
            dispatch({
              type: LOGIN_USER_SUCCESS,
              payload: user
            });
          });
      });
  };
};
