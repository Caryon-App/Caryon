import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomText from "../components/CustomText";
import RoundedButton from "../components/RoundedButton";
import InputWithIcon from "../components/InputWithIcon";

const HomeScreen = () => {
  const [inputValue, setInputValue] = useState("");
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Try editing me! </Text>
      <InputWithIcon
        iconName="envelope"
        iconColor="#000"
        iconSize={20}
        placeholder="Mail..."
        value={inputValue}
        onChangeText={setInputValue}
      />
      <View style={styles.buttonContainer}>
        <CustomText type="h1">Este es un H1</CustomText>
        <CustomText type="h2">Este es un H2</CustomText>
        <CustomText type="p">Esto es un párrafo.</CustomText>
        <RoundedButton
          title="Presiona para ir a Details"
          onPress={() => navigation.navigate("Details", { inputValue })}
        />
        <RoundedButton
          title="Presiona para ir a Login"
          onPress={() => navigation.navigate("Login", { inputValue })}
        />
        <RoundedButton
          title="Presiona para ir a Registration"
          onPress={() => navigation.navigate("Registration", { inputValue })}
        />
      </View>
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
