import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Asegúrate de importar el ícono adecuado

const InputWithIcon = ({ iconName, iconColor, iconSize, ...textInputProps }) => {
  return (
    <View style={styles.container}>
      <Icon name={iconName} size={iconSize} color={iconColor} style={styles.icon} />
      <TextInput style={styles.input} {...textInputProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
});

export default InputWithIcon;
