import React from 'react';
import { ScrollView } from 'react-native';
import Section from './Section';
import ShopItem from './ShopItem';
import styles from '../../styles/ShopStyles';

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



export default ShoppingList;
