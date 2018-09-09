import React from 'react';
import { View } from 'react-native';

const CardSection = props => (
  <View style={styles.containerStyle}>{props.children}</View>
);
const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#DDD',
    position: 'relative'
  }
};

/** 
 * This export statement has been modified to utilize the pattern
 * described within ./index.js.
 */
export { CardSection };
