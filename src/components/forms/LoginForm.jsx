import { useNavigation } from "@react-navigation/native"; // Import the 'useNavigation' hook
import React, { useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { loginUser } from "../../javascript/supabase/auth"; // Asegúrate de que este es el camino correcto para tu función de inicio de sesión
import InputWithIcon from "../general/InputWithIcon"; // Asegúrate de que este es el camino correcto para tu componente InputWithIcon
import RoundedButton from "../general/RoundedButton";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation(); // Use the 'useNavigation' hook to get the navigation object

  const handleLogin = async () => {
    console.log(email, password);
    try {
      const { data } = await loginUser(email, password);
      Alert.alert("Inicio de sesión exitoso", `Usuario: ${data.user.email}`);
      // Navegar a otra pantalla si es necesario
    } catch (error) {
      Alert.alert("Error", error.error_description || error.message);
    }
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
      <TouchableOpacity onPress={() => navigation.navigate("PasswordRecovery")}>
        <Text style={styles.linkText}>Olvidé mi contraseña</Text>
      </TouchableOpacity>
      <RoundedButton title="Log In" onPress={handleLogin} />
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
    color: "#FA5246",
    textDecorationLine: "underline",
    textAlign: "center",
    marginVertical: 5,
  },
});

export default LoginForm;
