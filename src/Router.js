import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee.js';
import EditEmployee from './components/EditEmployee.js';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Welcome" initial />
        </Scene>
        <Scene
          key="main"
          rightTitle="Add"
          onRight={() => {
            Actions.AddEmployee();
          }}>
          <Scene
            key="employeeList"
            component={EmployeeList}
            title="Employees"
            initial
          />
          <Scene
            key="AddEmployee"
            component={AddEmployee}
            title="Add Employee"
          />
          <Scene
            key="EditEmployee"
            component={EditEmployee}
            title="Edit Employee"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
