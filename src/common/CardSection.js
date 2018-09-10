import React from 'react';
import { View } from 'react-native';

const CardSection = props => (
  /**
   * When the style attribute is passed an array, 
   * the rightmost item in that array will overide the left.
   * 
   * Below, props.style will override styles.containerStyle
   */
  <View style={[styles.containerStyle, props.style]}>{props.children}</View>
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
