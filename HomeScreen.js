import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import CustomText from "./src/components/CustomText";

const HomeScreen = () => {
  const [textoUsuario, setTextoUsuario] = useState("Escribe algo aquí: ");

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Try editing me! </Text>
      <View style={styles.buttonContainer}>
        <CustomText type="h1">Este es un H1</CustomText>
        <CustomText type="h2">Este es un H2</CustomText>
        <CustomText type="p">Esto es un párrafo.</CustomText>

        <Button
          title="Presiona aquí"
          onPress={() => navigation.navigate("Details", { textoUsuario })}
        />
      </View>
      <TextInput value={textoUsuario} onChangeText={setTextoUsuario} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    margin: 20,
  },
});

export default HomeScreen;
