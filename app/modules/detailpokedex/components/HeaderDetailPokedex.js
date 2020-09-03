import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'


const HeaderDetailPokedex = () => {

    const [st, setSt] = useState(false);
    const [icon, setIcon] = useState('heart-o');
    const [color, setColor] = useState('#ffffff');

    const onFavorite = () => {
        if (!st) {
            setSt(true)
            setIcon('heart')
            setColor('#f70094')
        } else {
            setSt(false)
            setIcon('heart-o')
            setColor('#ffffff')
        }
    }

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => onFavorite()}>
            <Icon name={icon} color={color} size={24} />
        </TouchableOpacity>
    );
}

export default HeaderDetailPokedex;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        zIndex: 999999,
        marginRight: 24
    },
});