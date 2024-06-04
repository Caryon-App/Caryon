import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { spoonacularClient } from "../../javascript/spoonacularApi"; // Asegúrate de tener la ruta correcta al archivo

const RecipeComponent = () => {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRecipe = async () => {
      setLoading(true);
      try {
        const randomRecipe = await spoonacularClient.getRandomChickenRecipe();
        setRecipe(randomRecipe);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  if (!recipe) {
    return <Text>No recipe found.</Text>;
  }

  return (
    <View>
      <Text>{recipe.title}</Text>
      {/* Renderiza aquí los detalles de tu receta */}
    </View>
  );
};

export default RecipeComponent;
