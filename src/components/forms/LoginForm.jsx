import { useNavigation } from '@react-navigation/native'; // Import the 'useNavigation' hook
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import InputWithIcon from '../general/InputWithIcon'; // Asegúrate de que este es el camino correcto para tu componente InputWithIcon
import RoundedButton from '../general/RoundedButton';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation(); // Use the 'useNavigation' hook to get the navigation object

  const handleRegistration = () => {
    // Aquí deberías incluir la validación de los datos ingresados y luego enviarlos a tu backend o manejarlos según sea necesario
    Alert.alert("Inicio de sesión", `Nombre: ${name}\nEmail: ${email}`);
  };

  return (
    <View style={styles.container}>
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
      <TouchableOpacity
        onPress={() => navigation.navigate('PasswordRecovery')}
      >
        <Text style={styles.linkText}>Olvidé mi contraseña</Text>
      </TouchableOpacity>
      <RoundedButton title="Log In" onPress={handleRegistration} />
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
  linkText: {
    color: '#FA5246',
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginVertical: 5,
  },
});

export default LoginForm;
