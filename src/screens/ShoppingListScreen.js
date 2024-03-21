import React from "react";
import { StyleSheet, View } from "react-native";
import ShoppingList from "../components/shoppingList/ShoppingList";

const ShoppingListScreen = () => {
  return (
    <View style={styles.container}>
      <ShoppingList />
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

export default ShoppingListScreen;
