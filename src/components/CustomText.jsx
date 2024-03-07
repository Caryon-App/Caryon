import React from 'react';
import { Text, StyleSheet } from 'react-native';

// Definición del componente CustomText para aceptar children
const CustomText = ({ type, children }) => {
  // Selecciona el estilo basado en el tipo de texto
  const textStyle = styles[type] || styles.p;

  return <Text style={textStyle}>{children}</Text>;
};

// Estilos para diferentes tipos de texto
const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00473e',
    textAlign: 'center',

  },
  h2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00473e',
    textAlign: 'center',
  },
  p: {
    fontSize: 16,
    color: '#475d5b',
    textAlign: 'center',
  },
});

export default CustomText;
