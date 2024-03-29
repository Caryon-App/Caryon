import React from "react";
import { StyleSheet, View } from "react-native";

// En tu App.js o donde configures la navegación
import CustomText from "../components/general/CustomText";
import PasswordRecoveryForm from "../components/forms/PasswordRecoveryForm";

const RecoverPasswordScreen = () => {
  return (
    <View style={styles.container}>
      <CustomText type="h1">Recuperar{"\n"}contraseña</CustomText>
      <PasswordRecoveryForm />
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

export default RecoverPasswordScreen;
