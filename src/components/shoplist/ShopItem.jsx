import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/ShopStyles';
import PropTypes from 'prop-types';

const ShopItem = ({ name }) => (
  <View style={styles.item}>
    <Text style={styles.itemName}>{name}</Text>
    <Ionicons name="checkmark" size={24} color="green" />
  </View>
);

ShopItem.propTypes = {
    name: PropTypes.string.isRequired,
    };


export default ShopItem;
