import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import thunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBT9prxL3REqJAPtkoQ0B45Hth0fuKe14k',
      authDomain: 'react-native-nav-finale.firebaseapp.com',
      databaseURL: 'https://react-native-nav-finale.firebaseio.com',
      projectId: 'react-native-nav-finale',
      storageBucket: 'react-native-nav-finale.appspot.com',
      messagingSenderId: '128332415434'
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(thunk))}>
        <Router />
      </Provider>
    );
  }
}

export default App;
