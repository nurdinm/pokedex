import React from 'react';
import { View, TextInput, StyleSheet, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
const Form = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.inputView}>
                <View style={styles.searchIcon}>
                    <Icon name="search" color="#000" size={16} />
                </View>
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Search Pokemon, Move, Ability etc"
                />
            </View>

        </View>
    );
}

export default Form;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    inputView: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        backgroundColor: '#f3f1f5',
        borderRadius: 25,
        borderColor: '#f3f1f5',
        borderWidth: 1,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#1c313a',
        marginHorizontal: 25,
    },
    inputBox: {
        flex: 1,
        paddingStart: 15,
    },
    icons: {
        paddingStart: 15,
        justifyContent: "center",
        alignItems: "center",
    }
})