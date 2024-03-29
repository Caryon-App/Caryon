import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from "../../styles/RecipePageStyles";
import PropTypes from 'prop-types';

const CategorySelector = ({ categories }) => (
  <View style={styles.categorySelector}>
    {categories.map(category => (
      <TouchableOpacity key={category} style={styles.categoryButton}>
        <Text style={styles.categoryButtonText}>{category}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

CategorySelector.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    };

export default CategorySelector;
