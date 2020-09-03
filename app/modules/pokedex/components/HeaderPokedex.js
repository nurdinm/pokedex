import React from 'react';
import { View, StyleSheet, Text, Image } from "react-native";

const logo = require('../../../assets/images/pokedexlogo.png');

const HeaderPokedex = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.imageHeader} source={require('../../../assets/images/pokedexlogo.png')} />
        </View>
    );
}

export default HeaderPokedex;

const styles = StyleSheet.create({
    container: {
        position: "relative",
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 25,
        marginVertical: 20,
        flex: 1,
        zIndex: 999999
    },
    imageHeader: {
        width: 200,
        height: 200,
        position: "absolute",
        right: -25,
        zIndex: 0
    }
});