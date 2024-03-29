// ListItem.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DeleteButton from './DeleteButton';

import PropTypes from 'prop-types';

const ListItem = ({ item, onRemoveItem }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{item.name}</Text>
            <DeleteButton onPress={() => onRemoveItem(item.id)} />
        </View>
    );
};

ListItem.propTypes = {
    item: PropTypes.object.isRequired,
    onRemoveItem: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
  },
});

export default ListItem;
