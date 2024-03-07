import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const RoundedButton = ({ onPress, title }) => {
  const [isPressed, setIsPressed] = useState(false);

  const buttonStyles = [
    styles.button,
    isPressed ? styles.buttonPressed : styles.buttonNotPressed,
  ];

  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={buttonStyles}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30, // Asegura que el botón sea redondeado
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  buttonPressed: {
    backgroundColor: '#ffa8ba', // Color cuando el botón está presionado
  },
  buttonNotPressed: {
    backgroundColor: '#faae2b', // Color por defecto del botón
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default RoundedButton;
