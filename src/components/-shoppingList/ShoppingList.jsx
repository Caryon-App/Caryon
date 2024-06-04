// ShoppingList.js
import React, { useRef, useState } from "react";
import { FlatList, StyleSheet, TextInput, View } from "react-native";
import RoundedButton from "../general/RoundedButton";
import ListItem from "./ListItem";

const ShoppingList = () => {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef(null);

  const addItem = () => {
    if (!item) return;
    setItems([...items, { id: Date.now(), name: item }]);
    setItem("");
    setShowInput(false); // Ocultar input después de añadir
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      {showInput ? (
        <TextInput
          ref={inputRef}
          style={styles.input}
          placeholder="Añade un ítem..."
          value={item}
          onChangeText={setItem}
          autoFocus={true}
        />
      ) : (
        <RoundedButton title="Añadir Ítem" onPress={() => setShowInput(true)} />
      )}
      {showInput && <RoundedButton title="Añadir" onPress={addItem} />}
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} onRemoveItem={removeItem} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default ShoppingList;
