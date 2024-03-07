import React from "react";

// En tu App.js o donde configures la navegación
import RegistrationForm from "../components/RegisterForm";
import { StyleSheet, View } from "react-native";

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
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