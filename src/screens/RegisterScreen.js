import React from "react";
import { StyleSheet, View } from "react-native";

// En tu App.js o donde configures la navegación
import RegistrationForm from "../components/forms/RegisterForm";
import CustomText from "../components/general/CustomText";

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
