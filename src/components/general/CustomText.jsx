import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';

const CustomText = ({ type, children, style }) => {
  // Aplica los estilos base y cualquier estilo adicional proporcionado
  const textStyle = StyleSheet.compose(styles[type] || styles.default, style);

  return <Text style={textStyle}>{children}</Text>;
};

// Valida las props del componente CustomText
CustomText.propTypes = {
  type: PropTypes.oneOf(['h1', 'h2', 'p']),
  children: PropTypes.node.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

// Define estilos predeterminados para el componente
const styles = StyleSheet.create({
  h1: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#00473e',
    textAlign: 'center',
  },
  h2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00473e',
  },
  p: {
    fontSize: 16,
    color: '#475d5b',
  },
  default: {
    fontSize: 16,
    color: '#000', // Estilo por defecto en caso de que no se proporcione un tipo
  },
});

export default CustomText;
