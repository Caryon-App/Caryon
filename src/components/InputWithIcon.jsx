import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, StyleSheet } from 'react-native';
// Importa FontAwesome5 y especifica el tipo de icono en las props
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const InputWithIcon = ({ iconName, iconColor, iconSize, ...textInputProps }) => {
  return (
    <View style={styles.container}>
      <FontAwesome5 name={iconName} size={iconSize} color={iconColor} style={styles.icon} solid={false} />
      <TextInput style={styles.input} {...textInputProps} />
    </View>
  );
};

InputWithIcon.propTypes = {
  iconName: PropTypes.string,
  iconColor: PropTypes.string,
  iconSize: PropTypes.number,
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
