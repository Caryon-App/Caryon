import React from "react";
import { StyleSheet, View } from "react-native";

// En tu App.js o donde configures la navegación
import CustomText from "../components/CustomText";
import RegistrationForm from "../components/RegisterForm";

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <CustomText type="h1">Registro</CustomText>
      <RegistrationForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  buttonContainer: {
    margin: 20,
  },
});

export default RegisterScreen;