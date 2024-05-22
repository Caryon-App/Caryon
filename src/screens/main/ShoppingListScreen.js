// src/screens/main/ShoppingListScreen.js
import { useNavigation } from "@react-navigation/native"; // Importa useNavigation
import React, { useState } from "react";
import { Button, View } from "react-native"; // Importa Button de react-native
import AddIttemsButton from "../../components/shoplist/AddIttemsButton";
import Header from "../../components/shoplist/Header";
import ShoppingList from "../../components/shoplist/ShoppingList";
import styles from "../../styles/ShopStyles";

const ShoppingListScreen = () => {
  const navigation = useNavigation(); // Usa useNavigation para navegar
  const [items, setItems] = useState([
    {
      title: "Frutas y verduras",
      items: [
        { name: "Manzana", checked: false },
        { name: "Plátano", checked: false },
        { name: "Zanahoria", checked: false },
      ],
    },
    {
      title: "Panadería",
      items: [
        { name: "Harina", checked: false },
        { name: "Leche", checked: false },
        { name: "Levadura", checked: false },
      ],
    },
  ]);

  const addItem = (category, newItemName) => {
    const existingSectionIndex = items.findIndex(
      (section) => section.title === category
    );

    if (existingSectionIndex !== -1) {
      // La sección ya existe, agregamos el elemento a esa sección
      const newItems = items.map((section, index) => {
        if (index === existingSectionIndex) {
          return {
            ...section,
            items: [...section.items, { name: newItemName, checked: false }],
          };
        }
        return section;
      });

      setItems(newItems);
    } else {
      // La sección no existe, agregamos una nueva sección
      setItems([
        ...items,
        {
          title: category,
          items: [{ name: newItemName, checked: false }],
        },
      ]);
    }
  };

  // const userId = "610f69a1-6a36-4213-8854-06b3149e77b2";

  return (
    <View style={styles.container}>
      <Header title="Lista de la compra" />
      <ShoppingList items={items} />
      <AddIttemsButton addNewItem={addItem} />
      <Button
        title="View Ingredients"
        onPress={() => navigation.navigate("Ingredients")}
      />
    </View>
  );
};

export default ShoppingListScreen;
