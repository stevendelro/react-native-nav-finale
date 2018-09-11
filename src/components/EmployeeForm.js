import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Picker, Text, StyleSheet } from 'react-native';
import { CardSection, Input } from '../common';
import { editEmployee } from '../actions';

class EmployeeForm extends Component {
  render() {
    const { name, phone } = this.props;
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={name}
            onChangeText={employeeName =>
              this.props.editEmployee({
                prop: 'name',
                value: employeeName
              })
            }
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="012-345-6789"
            value={phone}
            onChangeText={phoneNumber =>
              this.props.editEmployee({
                prop: 'phone',
                value: phoneNumber
              })
            }
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerLabelStyle}>Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={day =>
              this.props.editEmployee({
                prop: 'shift',
                value: day
              })
            }>
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
});

const mapStateToProps = state => {
  const { name, phone, shift } = state.form;
  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  { editEmployee }
)(EmployeeForm);
