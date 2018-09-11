import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import FormReducer from './FormReducer';
import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
  auth: AuthReducer,
  form: FormReducer,
  employees: EmployeeReducer
});
