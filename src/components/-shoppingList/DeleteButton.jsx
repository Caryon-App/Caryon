// DeleteButton.js
import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const DeleteButton = ({ onPress }) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>Eliminar</Text>
      </TouchableOpacity>
    );
  };
  
  DeleteButton.propTypes = {
    onPress: PropTypes.func.isRequired,
  };

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ff6347',
    padding: 5,
    borderRadius: 5,
  },
  text: {
    color: '#ffffff',
  },
});

export default DeleteButton;
