import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/ShopStyles';

const Footer = () => (
    <View style={styles.footer}>
        <TextInput
            style={styles.searchInput}
            placeholder="Buscar..."
            // Aquí la lógica para manejar el texto de búsqueda
        />
        <TouchableOpacity style={styles.addButton}>
            <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
    </View>
);

export default Footer;
