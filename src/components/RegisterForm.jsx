import React, { useState } from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';
import InputWithIcon from './InputWithIcon'; // Asegúrate de que este es el camino correcto para tu componente InputWithIcon

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = () => {
    // Aquí deberías incluir la validación de los datos ingresados y luego enviarlos a tu backend o manejarlos según sea necesario
    Alert.alert("Registro", `Nombre: ${name}\nEmail: ${email}`);
  };

  return (
    <View style={styles.container}>
      <InputWithIcon
        iconName="user"
        iconColor="#000"
        iconSize={20}
        placeholder="Nombre completo"
        value={name}
        onChangeText={setName}
        autoCapitalize="words"
      />
      <InputWithIcon
        iconName="envelope"
        iconColor="#000"
        iconSize={20}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <InputWithIcon
        iconName="lock"
        iconColor="#000"
        iconSize={20}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true} // Esto es para ocultar la contraseña mientras se escribe
      />
      <Button title="Registrarse" onPress={handleRegistration} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    // Agrega cualquier estilo adicional que necesites para tu formulario
    marginVertical: 20,
  },
});

export default RegistrationForm;
