import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  View,
  TextInput,
  Text,
} from "react-native";
import CategorySelector from "../../components/recipes/CategorySelector";
import RecipeApiCard from "../../components/recipes/RecipeApiCard";
import Header from "../../components/shoplist/Header";
import styles from "../../styles/RecipePageStyles";
import { spoonacularClient } from "../../javascript/spoonacularApi"; // Asegúrate de que la ruta es correcta

const InspirationScreen = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const placeholder = "Buscar recetas";

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        const data = await spoonacularClient.getRandomRecipes("chicken");
        setRecipes(data || []); // Asegúrate de que 'data' sea correcto
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadRecipes();
  }, []);

  const searchRecipes = async (query) => {
    try {
      setLoading(true);
      const data = await spoonacularClient.getRandomRecipes(query); // Usa la función correcta para buscar por ingrediente
      console.log(data); // Imprime la respuesta completa de la API
      setRecipes(data || []); // Asegúrate de que 'data' sea correcto
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={styles.screenContainer}>
      <Header title="Recetas" />

      <View style={styles.searchBar}>
        <TextInput
          placeholder={placeholder}
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={() => searchRecipes(searchQuery)}
        />
      </View>

      <CategorySelector categories={["Postres", "Cenas", "Desayunos"]} />
      <ScrollView style={styles.recipeList}>
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <RecipeApiCard key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <View style={styles.noResults}>
            <Text>No se encontraron recetas.</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default InspirationScreen;
