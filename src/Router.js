import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

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
            console.log('onRight!');
          }}>
          <Scene
            key="employeeList"
            component={EmployeeList}
            title="Employees"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
