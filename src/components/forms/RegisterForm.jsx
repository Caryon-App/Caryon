import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { registerUser } from "../../javascript/supabase/auth";
import InputWithIcon from "../general/InputWithIcon";
import RoundedButton from "../general/RoundedButton";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegistration = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Las contraseñas no coinciden");
      return;
    }
    try {
      console.log(email, password);
      const { data } = await registerUser(email, password);
      Alert.alert("Registro exitoso", `Usuario registrado: ${data.user.email}`);
      // Navegar a otra pantalla si es necesario
    } catch (error) {
      Alert.alert("Error", error.error_description || error.message);
    }
  };

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

export default RegisterForm;
