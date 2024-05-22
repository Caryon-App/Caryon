import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, View } from "react-native";
import CategorySelector from "../../components/recipes/CategorySelector";
import RecipeApiCard from "../../components/recipes/RecipeApiCard";
// import SearchBar from "../../components/recipes/SearchBar";
import TextInput from "../../components/TextInput";
import Header from "../../components/shoplist/Header";
import styles from "../../styles/RecipePageStyles";

// Asumiendo que spoonacularClient está correctamente importado
import { spoonacularClient } from "../../javascript/spoonacularApi";

const InspirationScreen = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const placeholder = "Buscar recetas";

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

  const searchRecipes = async (query) => {
    try {
      setLoading(true);
      const data = await spoonacularClient.getRandomRecipes(query);
      setRecipes(data);
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
          onSubmitEditing={() => searchRecipes(placeholder)}
        />
      </View>

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
