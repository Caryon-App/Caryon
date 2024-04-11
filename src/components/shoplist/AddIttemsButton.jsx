import React, { useState } from 'react';
import { TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/ShopStyles';
import { View } from 'react-native-web';

const AddItemsButton = ({ addNewItem }) => {
    const [newItemName, setNewItemName] = useState('');
    const [category, setCategory] = useState('');

    const handleAddItem = () => {
        if (newItemName && category) {
            addNewItem(category, newItemName);
            setNewItemName('');
            setCategory('');
        }
    };

    return (
        <KeyboardAvoidingView
        style={styles.footer}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 120 : 0} // Ajusta esto según sea necesario
        >
            <TextInput
                style={styles.searchInput}
                placeholder="Nombre del elemento"
                value={newItemName}
                onChangeText={setNewItemName}
            />
            <TextInput
                style={styles.searchInput}
                placeholder="Categoría"
                value={category}
                onChangeText={setCategory}
            />
            <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
                <Ionicons name="add" size={24} color="white" />
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
};

export default AddItemsButton;
