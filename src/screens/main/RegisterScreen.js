// src/screens/main/RegisterScreen.js
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import RegisterForm from "../../components/forms/RegisterForm";
import CustomText from "../../components/general/CustomText";

const RegisterScreen = () => {
  const navigation = useNavigation();

  const handleLoginNavigation = () => {
    navigation.navigate("Login");
  };

  const handleRegisterSuccess = () => {
    navigation.navigate("Main", {
      screen: "Ingredients",
    });
  };

  return (
    <View style={styles.container}>
      <CustomText type="h1">Registro</CustomText>
      <RegisterForm onSuccess={handleRegisterSuccess} />
      <TouchableOpacity onPress={handleLoginNavigation}>
        <Text style={styles.backToLoginButton}>
          Ya tienes cuenta? Inicia sesión
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  backToLoginButton: {
    color: "blue",
    textAlign: "center",
    marginVertical: 10,
  },
});

export default RegisterScreen;
