import PropTypes from "prop-types";
import React from "react";
import { TextInput, View } from "react-native";
import styles from "../../styles/RecipePageStyles";

const SearchBar = ({ placeholder }) => (
  <View style={styles.searchBar}>
    <TextInput placeholder={placeholder} style={styles.searchInput} />
  </View>
);

SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default SearchBar;
