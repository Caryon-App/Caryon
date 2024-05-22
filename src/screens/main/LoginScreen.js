// src/screens/main/LoginScreen.js
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import LoginForm from "../../components/forms/LoginForm";
import CustomText from "../../components/general/CustomText";

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleRegisterNavigation = () => {
    navigation.navigate("Register");
  };

  const handleLoginSuccess = () => {
    navigation.navigate("Main", {
      screen: "Ingredients",
    });
  };

  return (
    <View style={styles.container}>
      <CustomText type="h1">Log In</CustomText>
      <LoginForm onSuccess={handleLoginSuccess} />
      <TouchableOpacity onPress={handleRegisterNavigation}>
        <Text style={styles.registerButton}>No tienes cuenta? Regístrate</Text>
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
  registerButton: {
    color: "blue",
    textAlign: "center",
    marginVertical: 10,
  },
});

export default LoginScreen;
