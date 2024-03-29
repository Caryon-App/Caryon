import React from 'react';
import { ScrollView } from 'react-native';
import Section from './Section';
import ShopItem from './ShopItem';
import styles from '../../styles/ShopStyles';

const ShoppingList = () => (
  <ScrollView style={styles.listContainer}>
    <Section title="Frutas y verduras">
      <ShopItem name="Manzana" />
      <ShopItem name="Plátano" />
      <ShopItem name="Zanahoria" />
    </Section>
    <Section title="Panadería">
      <ShopItem name="Harina" />
      <ShopItem name="Leche" />
      <ShopItem name="Levadura" />
    </Section>
    {/* Más secciones si es necesario */}
  </ScrollView>
);

export default ShoppingList;
