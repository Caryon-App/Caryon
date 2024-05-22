// src\components\shoplist\ShoppingList.jsx
import PropTypes from "prop-types";
import React from "react";
import { ScrollView } from "react-native";
import styles from "../../styles/ShopStyles";
import Section from "./Section";
import ShopItem from "./ShopItem";

const ShoppingList = ({ items }) => (
  <ScrollView style={styles.listContainer}>
    {items.map((section, index) => (
      <Section key={index} title={section.title}>
        {section.items.map((item, idx) => (
          <ShopItem key={idx} name={item.name} checked={item.checked} />
        ))}
      </Section>
    ))}
  </ScrollView>
);

ShoppingList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          checked: PropTypes.bool.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default ShoppingList;
