import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import InputWithIcon from './InputWithIcon'; // Asegúrate de que este es el camino correcto para tu componente InputWithIcon
import RoundedButton from './RoundedButton';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = () => {
    // Aquí deberías incluir la validación de los datos ingresados y luego enviarlos a tu backend o manejarlos según sea necesario
    Alert.alert("Registro", `Nombre: ${name}\nEmail: ${email}`);
  };

  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <InputWithIcon
          iconName="user"
          iconSize={20}
          placeholder="Nombre completo"
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
        />
      </View>
      <View style={styles.inputContainer}>
        <InputWithIcon
          iconName="envelope"
          iconSize={20}
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputContainer}>
        <InputWithIcon
          iconName="lock"
          iconSize={20}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true} // Esto es para ocultar la contraseña mientras se escribe
        />
      </View>
      <View style={styles.inputContainer}>
        <InputWithIcon
          iconName="lock"
          iconSize={20}
          placeholder="Repetir contraseña"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true} // Esto es para ocultar la contraseña mientras se escribe
        />
      </View>
      <RoundedButton title="Registrarse" onPress={handleRegistration} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  inputContainer: {
    marginBottom: 15, // Añade un margen en la parte inferior de cada input
  },
});

export default RegistrationForm;
