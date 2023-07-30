import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  StyleProp,
  StyleSheetProperties,
  TextInputProps,
} from 'react-native';

interface IInputField extends TextInputProps {
  customStyle?: {};
}

const InputField = ({customStyle, value, onChangeText,placeholder}: IInputField) => {
  return (
    <TextInput
      style={[styles.input, customStyle]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default InputField;

const styles = StyleSheet.create({
  input: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    height: 45,
    color: 'black',
  },
});
