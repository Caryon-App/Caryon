import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';


const DetailsScreen = ({ route }) => {
    const { textoUsuario } = route.params;

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Detalles de la vista</Text>
            <Text>Texto recibido: {textoUsuario}</Text>
        </View>
    );
};

DetailsScreen.propTypes = {
    route: PropTypes.shape({
        params: PropTypes.shape({
            textoUsuario: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
};


export default DetailsScreen;

