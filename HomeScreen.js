import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


const HomeScreen = () => {
    const [textoUsuario, setTextoUsuario] = useState('Escribe aquí: ');

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Try editing me! </Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Presiona aquí"
                    onPress={() => navigation.navigate('Details', { textoUsuario })}
                />
            </View>
            <TextInput
                value={textoUsuario}
                onChangeText={setTextoUsuario}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 20,
    },
});

export default HomeScreen;