// src/screens/main/IngredientsScreen.js
import React, { useEffect, useState } from "react";
import supabase from "../../javascript/supabase/supabaseClient";

import {
  ActivityIndicator,
  Button,
  FlatList,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const IngredientsScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const fetchIngredients = async () => {
    try {
      const { data, error } = await supabase
        .from("Ingredients")
        .select("*")
        .order("name", { ascending: true });
      if (error) {
        throw new Error(error.message);
      }
      setIngredients(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data, error } = await supabase.from("Sections").select("*");
        if (error) {
          throw new Error(error.message);
        }
        setCategories(data);
        setSelectedCategory(data.length > 0 ? data[0].sect_id : ""); // Set the first category as default
      } catch (error) {
        setError(error.message);
      }
    };

    fetchIngredients();
    fetchCategories();
  }, []);

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const handleButtonPress = async () => {
    try {
      const { data, error } = await supabase.from("Ingredients").insert([
        {
          name: inputValue,
          checked: false,
          sect_id: selectedCategory,
          usu_id: "610f69a1-6a36-4213-8854-06b3149e77b2",
        },
      ]);

      if (error) {
        console.error("Error posting data:", error.message);
        return;
      }

      console.log("Data posted successfully:", data);
      setInputValue("");
      fetchIngredients(); // Fetch the updated ingredients list
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingredientes por Sección:</Text>
      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <FlatList
            data={categories}
            keyExtractor={(item) => item.sect_id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.modalItem}
                onPress={() => {
                  setSelectedCategory(item.sect_id);
                  setIsModalVisible(false);
                }}
              >
                <Text style={styles.modalItemText}>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
      <ScrollView style={styles.scrollContainer}>
        {categories.map((category) => (
          <View key={category.sect_id} style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>{category.title}</Text>
            <FlatList
              data={ingredients.filter(
                (ingredient) => ingredient.sect_id === category.sect_id
              )}
              keyExtractor={(item) => item.al_id.toString()}
              renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                  <Text style={styles.itemName}>• {item.name}</Text>
                  <Text
                    style={[
                      styles.itemChecked,
                      { color: item.checked ? "green" : "red" },
                    ]}
                  >
                    {item.checked ? "1" : "0"}
                  </Text>
                </View>
              )}
            />
          </View>
        ))}
      </ScrollView>
      <View style={styles.fixedSection}>
        <TouchableOpacity
          style={styles.pickerButton}
          onPress={() => setIsModalVisible(true)}
        >
          <Text style={styles.pickerButtonText}>
            {categories.find((cat) => cat.sect_id === selectedCategory)
              ?.title || "Selecciona una categoría"}
          </Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          onChangeText={handleInputChange}
          value={inputValue}
          placeholder="Agregar ingrediente"
        />
        <Button title="Enviar" onPress={handleButtonPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  categoryContainer: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#f9f9f9",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
  },
  itemName: {
    fontSize: 18,
  },
  itemChecked: {
    fontSize: 18,
  },
  ingredientItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  pickerButton: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    marginVertical: 10,
    borderRadius: 5,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  pickerButtonText: {
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalItem: {
    padding: 20,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  modalItemText: {
    fontSize: 18,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default IngredientsScreen;
