// src/screens/main/IngredientsScreen.js
import React, { useEffect, useState } from "react";
import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Text,
    View,
} from "react-native";

const IngredientsScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIngredients = async () => {
      const url =
        "https://ijflbhnnkysiabzsrlvy.supabase.co/rest/v1/Ingredients?select=*";
      const headers = {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqZmxiaG5ua3lzaWFienNybHZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE5MDE0OTQsImV4cCI6MjAyNzQ3NzQ5NH0.sMqgsPT-mJXcMhAa4FZt1T8jQRFiKDt7JvoF3R2ujPU",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqZmxiaG5ua3lzaWFienNybHZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE5MDE0OTQsImV4cCI6MjAyNzQ3NzQ5NH0.sMqgsPT-mJXcMhAa4FZt1T8jQRFiKDt7JvoF3R2ujPU",
      };

      try {
        const response = await fetch(url, { headers });
        const data = await response.json();
        setIngredients(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchIngredients();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemChecked}>
        {item.checked ? "Checked" : "Unchecked"}
      </Text>
    </View>
  );

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
      <Text style={styles.title}>Ingredientes:</Text>
      <FlatList
        data={ingredients}
        keyExtractor={(item) => item.al_id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
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
    color: "green",
  },
});

export default IngredientsScreen;
