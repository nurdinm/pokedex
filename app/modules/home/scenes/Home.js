import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import Menu from '../components/Menu';
import HeaderNews from '../components/HeaderNews';
import ListItemNews from '../components/ListItemNews';

const logo = require("../../../assets/images/pokedexlogo.png");

export default function Home({ navigation }) {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.topContainer}>
                        <Header logo={logo} />
                        <SearchBox />
                        <Menu navigation={navigation} />
                    </View>
                    <View style={{ paddingStart: 12, paddingEnd: 12 }}>
                        <HeaderNews />
                        <ListItemNews />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topContainer: {
        flex: 1,
        padding: 12,
        backgroundColor: '#ffffff',
        borderBottomStartRadius: 24,
        borderBottomEndRadius: 24,
    }
})
