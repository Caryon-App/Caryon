import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/ShopStyles';
import PropTypes from 'prop-types';

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
