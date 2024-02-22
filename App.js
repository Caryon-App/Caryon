import { StatusBar } from "expo-status-bar";
import React, { useState } from "react"; // Importa useState
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  // Define textoUsuario como un estado con useState
  const [textoUsuario, setTextoUsuario] = useState("Escribe aquí...");

  return (
    <>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Try editing me! 🎉</Text>
        <View style={styles.buttonContainer}></View>
        <Button
          title="Presiona aquí"
          onPress={() =>
            Alert.alert("Botón presionado", "Texto ingresado: " + textoUsuario)
          }
        />
        {/* Actualiza textoUsuario con setTextoUsuario */}
        <TextInput
          value={textoUsuario}
          onChangeText={(text) => setTextoUsuario(text)}
        ></TextInput>
      </View>
      <StatusBar style="auto" />
    </>
  );
}

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
