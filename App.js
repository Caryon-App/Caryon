import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <><View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Try editing me! 🎉</Text>
      <View style={styles.buttonContainer}></View>
      <Button title="Presiona aquí" onPress={() => Alert.alert('Botón presionado')} />
    </View><StatusBar style="auto" /></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
  },
});
