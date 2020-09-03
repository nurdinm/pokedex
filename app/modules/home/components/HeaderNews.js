import React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";

const HeaderNews = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleHeader}>Pokemon News</Text>
            <Text style={styles.viewHeader}>View All</Text>
        </View >
    );
};

export default HeaderNews;

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingStart: 8,
        paddingEnd: 8
    },
    titleHeader: {
        fontSize: 18,
        fontFamily: "Nunito-Bold",
        zIndex: 99,
    },
    viewHeader: {
        color: "#5a88ca",
    }
});