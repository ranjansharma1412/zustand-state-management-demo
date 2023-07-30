import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';

interface IActionButton {
  text: string;
  onPress: () => void;
}

const ActionButton = ({text, onPress}: IActionButton) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={{color: 'white', textAlign: 'center'}}>{text}</Text>
    </Pressable>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
