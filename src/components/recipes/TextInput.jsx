// src\components\recipes\TextInput.jsx
import React from "react";
import { TextInput as RNTextInput, StyleSheet } from "react-native";

const TextInput = ({ style, ...props }) => {
  return <RNTextInput style={[styles.input, style]} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});

TextInput.propTypes = {
  style: RNTextInput.propTypes.style,
};

export default TextInput;
