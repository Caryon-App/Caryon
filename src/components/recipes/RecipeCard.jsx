import PropTypes from "prop-types";
import React from "react";
import { Image, Text, View } from "react-native";
import styles from "../../styles/RecipePageStyles";

const RecipeCard = ({ title, imageUrl }) => (
  <View style={styles.recipeCard}>
    <Image source={{ uri: imageUrl }} style={styles.recipeImage} />
    <Text style={styles.recipeTitle}>{title}</Text>
    {/* Añade más información de la receta aquí si es necesario */}
  </View>
);

RecipeCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default RecipeCard;
