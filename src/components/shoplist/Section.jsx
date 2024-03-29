import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/ShopStyles';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };
    

export default Section;
