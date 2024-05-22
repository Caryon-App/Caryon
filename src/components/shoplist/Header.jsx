import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import React from "react";
import { Text, View } from "react-native";
import styles from "../../styles/ShopStyles";

const Header = ({ title }) => (
  <View style={styles.header}>
    <Ionicons name="arrow-back" size={24} color="black" />
    <Text style={styles.title}>{title}</Text>
  </View>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
