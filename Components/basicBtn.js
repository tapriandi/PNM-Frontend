import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ type, title, onPress }) => {
  let buttonStyle = styles.primaryButton;
  let textStyle = styles.primaryText;

  if (type === 'secondary') {
    buttonStyle = styles.secondaryButton;
    textStyle = styles.secondaryText;
  } else if (type === 'warning') {
    buttonStyle = styles.warningButton;
    textStyle = styles.warningText;
  } // Add more conditions for different button types

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  primaryText: {
    color: '#fff',
    fontSize: 16,
  },
  secondaryButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  secondaryText: {
    color: '#fff',
    fontSize: 16,
  },
  warningButton: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  warningText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CustomButton;
