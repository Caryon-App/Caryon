import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "../../styles/ShopStyles";

const ShopItem = ({ name }) => {
  const [checked, setChecked] = useState(false);

  const toggleChecked = () => {
    setChecked(!checked);
  };

  return (
    <TouchableOpacity style={styles.item} onPress={toggleChecked}>
      <Text style={styles.itemName}>{name}</Text>
      {checked ? (
        <Ionicons name="close-circle" size={24} color="red" />
      ) : (
        <Ionicons name="checkmark-circle" size={24} color="green" />
      )}
    </TouchableOpacity>
  );
};

ShopItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ShopItem;
