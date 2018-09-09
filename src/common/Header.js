// Import libraries for making a component
import React from 'react';
import { Text, View, Platform } from 'react-native';

// Make a component
const Header = props => {
  const { viewStyle, textStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

// CSS
const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        paddingTop: 15
      },
      android: {
        elevation: 10
      }
    })
  }
};

/** 
 * This export statement has been modified to utilize the pattern
 * described within ./index.js
 */
export { Header };

