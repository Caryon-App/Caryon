import React from "react";
import { StyleSheet, View } from "react-native";

// En tu App.js o donde configures la navegación
import CustomText from "../components/general/CustomText";
import LoginForm from "../components/forms/LoginForm";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <CustomText type="h1">Log In</CustomText>
      <LoginForm />
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

export default LoginScreen;
