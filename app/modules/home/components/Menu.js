import React from 'react';
import { View, TextInput, StyleSheet, Dimensions, Text, Image, TouchableOpacity } from "react-native";
var width = Dimensions.get("window").width;
const Menu = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.twoCol}>
                <TouchableOpacity
                    style={[styles.boxContainer, styles.greenColor]}
                    onPress={() => navigation.navigate('Pokedex')}>
                    <View style={styles.boxMenu}>
                        <Text style={styles.boxTitle}>Pokedex</Text>
                        <Image style={styles.imageBox} source={require('../../../assets/images/pokedexlogo.png')} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.boxContainer, styles.redColor]}
                    onPress={() => navigation.navigate('Pokedex')}>
                    <View style={styles.boxMenu}>
                        <Text style={styles.boxTitle}>Moves</Text>
                        <Image style={styles.imageBox} source={require('../../../assets/images/pokedexlogo.png')} />
                    </View>
                </TouchableOpacity>
                {/* <View style={[styles.boxMenu, styles.redColor]}>
                    <Text style={styles.boxTitle}>Moves</Text>
                    <Image style={styles.imageBox} source={require('../../../assets/images/pokedexlogo.png')} />
                </View> */}
            </View>

            <View style={styles.twoCol}>
                <TouchableOpacity
                    style={[styles.boxContainer, styles.blueColor]}
                    onPress={() => navigation.navigate('Pokedex')}>
                    <View style={styles.boxMenu}>
                        <Text style={styles.boxTitle}>Abilities</Text>
                        <Image style={styles.imageBox} source={require('../../../assets/images/pokedexlogo.png')} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.boxContainer, styles.yellowColor]}
                    onPress={() => navigation.navigate('Pokedex')}>
                    <View style={styles.boxMenu}>
                        <Text style={styles.boxTitle}>Items</Text>
                        <Image style={styles.imageBox} source={require('../../../assets/images/pokedexlogo.png')} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.twoCol}>
                <TouchableOpacity
                    style={[styles.boxContainer, styles.grapeColor]}
                    onPress={() => navigation.navigate('Pokedex')}>
                    <View style={styles.boxMenu}>
                        <Text style={styles.boxTitle}>Locations</Text>
                        <Image style={styles.imageBox} source={require('../../../assets/images/pokedexlogo.png')} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.boxContainer, styles.brownColor]}
                    onPress={() => navigation.navigate('Pokedex')}>
                    <View style={styles.boxMenu}>
                        <Text style={styles.boxTitle}>Type Charts</Text>
                        <Image style={styles.imageBox} source={require('../../../assets/images/pokedexlogo.png')} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>

    );
}

export default Menu;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 50
    },
    twoCol: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginTop: 30,
        flexDirection: "row",
        flexWrap: 'wrap',
        maxHeight: 65
    },
    imageBox: {
        width: 100,
        height: 100,
        position: "absolute",
        right: -10,
        top: -10,
        opacity: 0.5
    },
    boxContainer: {
        flex: 1,
        width: "50%",
        height: 80,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'flex-start',
        overflow: "hidden",
        margin: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    },
    boxMenu: {
        width: "100%",
        flex: 1,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'flex-start',
        position: "relative",

    },
    boxTitle: {
        color: '#ffffff',
        paddingStart: 12,
        fontFamily: "Nunito-Regular",
    },
    greenColor: {
        backgroundColor: "#64c9a5"
    },
    redColor: {
        backgroundColor: "#e56d6f"
    },
    blueColor: {
        backgroundColor: "#6dadf4"
    },
    yellowColor: {
        backgroundColor: "#f7cf52"
    },
    grapeColor: {
        backgroundColor: "#774b8a"
    },
    brownColor: {
        backgroundColor: "#a76a6c"
    }
})