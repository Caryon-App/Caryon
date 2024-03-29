import React from "react";
import { View } from "react-native";
import Header from "../components/shoplist/Header";
import ShoppingList from "../components/shoplist/ShoppingList";
import Footer from "../components/shoplist/Footer";
import styles from "../styles/ShopStyles";

const ShoppingListApp = () => {
  return (
    <View style={styles.container}>
      <Header title="Lista de la compra" />
      <ShoppingList />
      <Footer />
    </View>
  );
};

export default ShoppingListApp;
