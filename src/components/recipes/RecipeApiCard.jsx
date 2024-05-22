import PropTypes from "prop-types";
import React from "react";
import { Image, Linking, StyleSheet, Text, View } from "react-native";

const RecipeApiCard = ({ recipe }) => {
  const {
    title,
    image,
    readyInMinutes,
    glutenFree,
    dairyFree,
    healthScore,
    summary,
    sourceUrl,
  } = recipe;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.info}>Listo en: {readyInMinutes} minutos</Text>
      <Text style={styles.info}>
        Libre de gluten: {glutenFree ? "Sí" : "No"}
      </Text>
      <Text style={styles.info}>
        Libre de lácteos: {dairyFree ? "Sí" : "No"}
      </Text>
      <Text style={styles.info}>Puntaje de salud: {healthScore}</Text>
      <Text style={styles.summary} numberOfLines={3}>
        {summary.replace(/<[^>]+>/g, "")}
      </Text>
      <Text style={styles.link} onPress={() => Linking.openURL(sourceUrl)}>
        Ver Receta Completa
      </Text>
    </View>
  );
};

RecipeApiCard.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    readyInMinutes: PropTypes.number.isRequired,
    glutenFree: PropTypes.bool.isRequired,
    dairyFree: PropTypes.bool.isRequired,
    healthScore: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    sourceUrl: PropTypes.string.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  info: {
    fontSize: 14,
    marginBottom: 4,
  },
  summary: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  link: {
    fontSize: 14,
    color: "#007bff",
  },
});

export default RecipeApiCard;
