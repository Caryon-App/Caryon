import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import CustomText from "../components/CustomText";
import RoundedButton from "../components/RoundedButton";
import InputWithIcon from "../components/InputWithIcon";

const HomeScreen = () => {
  const [inputValue, setInputValue] = useState("Escribe algo aqui");
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Try editing me! </Text>
      <InputWithIcon
        iconName="search"
        iconColor="#000"
        iconSize={20}
        placeholder="Buscar..."
        value={inputValue}
        onChangeText={setInputValue}
      />
      <View style={styles.buttonContainer}>
        <CustomText type="h1">Este es un H1</CustomText>
        <CustomText type="h2">Este es un H2</CustomText>
        <CustomText type="p">Esto es un párrafo.</CustomText>
        <RoundedButton
          title="Presiona Me"
          onPress={() => navigation.navigate("Details", { inputValue })}
        />
        <Button
          title="Presiona aquí"
          onPress={() => navigation.navigate("Details", { inputValue })}
        />
      </View>
      <TextInput value={inputValue} onChangeText={inputValue} />
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
