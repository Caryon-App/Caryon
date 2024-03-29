import React from 'react';
import { View, TextInput } from 'react-native';
import styles from "../../styles/RecipePageStyles";
import PropTypes from 'prop-types';

const SearchBar = ({ placeholder }) => (
  <View style={styles.searchBar}>
    <TextInput placeholder={placeholder} style={styles.searchInput} />
    {/* Añade el icono de búsqueda aquí si es necesario */}
  </View>
);

SearchBar.propTypes = {
    placeholder: PropTypes.string.isRequired,
    };

export default SearchBar;
