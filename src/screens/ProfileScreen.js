import React from "react";
import { StyleSheet, View } from "react-native";

// En tu App.js o donde configures la navegación
import RegisterForm from "../components/forms/RegisterForm";
import CustomText from "../components/general/CustomText";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <CustomText type="h1">Registro</CustomText>
      <RegisterForm />
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

export default ProfileScreen;
