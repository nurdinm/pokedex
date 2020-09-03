import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Evolutions() {
    return (
        <View style={styles.container}>
            <View style={styles.containerStat}>
                <View style={styles.pokeFirst}>
                    <Image style={styles.pokeImgFirst} source={require('../../../../assets/images/bulbasaur.png')} />
                    <Image style={styles.pokeBack} source={require('../../../../assets/images/pokedexlogo.png')} />
                    <Text style={styles.txtPoke}>Bulbasaur</Text>
                </View>
                <View style={styles.lvlEvo}>
                    <Icon name="long-arrow-right" color="#f4eff2" size={24} />
                    <Text style={styles.txtLvlEvo}> Lvl 16 </Text>
                </View>
                <View style={styles.pokeFirst}>
                    <Image style={styles.pokeImgFirst} source={require('../../../../assets/images/bulbasaur.png')} />
                    <Image style={styles.pokeBack} source={require('../../../../assets/images/pokedexlogo.png')} />
                    <Text style={styles.txtPoke}>Ivysaur</Text>
                </View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#ffffff'
    },
    containerStat: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        flex: 1,
        maxHeight: 80,
    },
    pokeFirst: {
        flex: 2,
        alignItems: 'center',
        position: 'relative'
    },
    pokeImgFirst: {
        width: 80,
        height: 80,
        zIndex: 99
    },
    lvlEvo: {
        flex: 2,
        alignItems: 'center'
    },
    txtLvlEvo: {
        marginTop: 12,
        fontSize: 12,
        fontFamily: 'Nunito-Regular'
    },
    txtPoke: {
        marginTop: 12,
        fontFamily: 'Nunito-Regular'
    },
    pokeBack: {
        position: "absolute",
        width: 90,
        height: 90,
    }
})

export default Evolutions;