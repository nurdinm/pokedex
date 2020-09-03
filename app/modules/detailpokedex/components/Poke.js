import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const Poke = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerTitleName}>
                <Text style={styles.titleName}>Bulbasaur</Text>
                <Text style={styles.titleNum}>#001</Text>
            </View>
            <View style={styles.headerTitleType}>
                <Text style={styles.boxType}>Grass</Text>
                <Text style={styles.boxType}>Poison</Text>
                <Text style={styles.titleType}>Seed Pokemon</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.imagePoke} source={require('../../../assets/images/pokedexlogo.png')} />
            </View>


        </View>
    );
}

export default Poke;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#64dbb3',
        paddingVertical: 12,
        paddingHorizontal:24
    },
    headerTitleName: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 24
    },
    titleName: {
        fontFamily: 'Nunito-ExtraBold',
        fontSize: 24,
        color: '#ffffff'
    },
    titleNum: {
        fontFamily: 'Nunito-Bold',
        fontSize: 18,
        color: '#ffffff'
    },
    headerTitleType: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    boxType: {
        color: '#ffffff',
        paddingHorizontal: 16,
        paddingVertical: 4,
        marginEnd: 12,
        marginBottom: 6,
        borderRadius: 12,
        fontSize: 13,
        fontFamily: "Nunito-Regular",
        textTransform: "capitalize",
        backgroundColor: "rgba(255,255,255,0.3)"
    },
    titleType: {
        fontFamily: 'Nunito-Regular',
        fontSize: 14,
        color: '#ffffff',
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        textAlign: "right"
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    imagePoke: {
        width: 200,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.3,
        transform: [
            { rotate: '60deg' }
        ]
    }

})