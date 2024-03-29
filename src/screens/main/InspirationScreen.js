import React from "react";
import { View, ScrollView } from "react-native";
import Header from "../../components/shoplist/Header";
import SearchBar from "../../components/recipes/SearchBar";
import CategorySelector from "../../components/recipes/CategorySelector";
import RecipeCard from "../../components/recipes/RecipeCard";
import styles from "../../styles/RecipePageStyles";

const InspirationScreen = () => {
  // Imagina que recipeData es la información de tus recetas obtenida de un API o base de datos
  const recipeData = [
    {
      id: 1,
      title: "Crepes",
      imageUrl:
        "https://s1.abcstatics.com/media/gurmesevilla/2010/06/crepes-con-nata-y-chocolate.jpeg",
    },
    {
      id: 2,
      title: "Tarta de Manzana",
      imageUrl: "https://imag.bonviveur.com/tarta-de-manzana.jpg",
    },
    // ...más recetas
  ];

  return (
    <View style={styles.screenContainer}>
      <Header title="Recetas" />
      <SearchBar placeholder="Postres" />
      <CategorySelector categories={["Postres", "Cenas", "Desayunos"]} />
      <ScrollView style={styles.recipeList}>
        {recipeData.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            title={recipe.title}
            imageUrl={recipe.imageUrl}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default InspirationScreen;
