import React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";

const Header = ({ logo }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleHeader}>What Pokemon {'\n'}are you looking for ?</Text>
            <Image style={styles.imageHeader} source={logo} />
        </View >
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        position: "relative"
    },
    titleHeader: {
        fontSize: 32,
        fontFamily: "Nunito-Bold",
        zIndex: 99,
        marginTop: 20,
    },
    imageHeader: {
        width: 200,
        height: 200,
        position: "absolute",
        right: -80,
        top: -80
    }
});