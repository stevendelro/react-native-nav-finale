import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

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
      <Provider store={createStore(reducers)}>
        <View>
          <Text>HELLO WORLD!</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
