import React, { useState, useEffect } from "react";
import { View, ScrollView, ActivityIndicator } from "react-native";
import Header from "../../components/shoplist/Header";
import SearchBar from "../../components/recipes/SearchBar";
import CategorySelector from "../../components/recipes/CategorySelector";
import RecipeApiCard from "../../components/recipes/RecipeApiCard";
import styles from "../../styles/RecipePageStyles";
// Asumiendo que spoonacularClient está correctamente importado
import { spoonacularClient } from "../../javascript/spoonacularApi";

const InspirationScreen = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        // Aquí podrías especificar tags como 'chicken' o lo que necesites
        const data = await spoonacularClient.getRandomRecipes("chicken");
        setRecipes(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadRecipes();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={styles.screenContainer}>
      <Header title="Recetas" />
      <SearchBar placeholder="Busca una receta" />
      <CategorySelector categories={["Postres", "Cenas", "Desayunos"]} />
      <ScrollView style={styles.recipeList}>
        {recipes.map((recipe) => (
          <RecipeApiCard
            key={recipe.id}
            recipe={recipe} // Ahora pasamos todo el objeto de receta
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default InspirationScreen;
