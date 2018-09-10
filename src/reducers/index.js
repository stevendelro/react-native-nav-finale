import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import FormReducer from './FormReducer';

export default combineReducers({
  auth: AuthReducer,
  form: FormReducer
});
