import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, ActivityIndicator, TouchableHighlight } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { getTypePokemon } from '../api';
import { addTypeData } from '../actions';

const ListItem = ({ item, navigation }) => {
    const [isFetching, setIsFetching] = useState(false);
    const [e, setE] = useState([]);

    useEffect(() => {
        setE("")
        const getData = async () => {
            setIsFetching(true)
            await getTypePokemon(item.url)
                .then(res => res.data)
                .then((data) => {

                    data.types.forEach((result, index) => {
                        setE(e => [...e, result.type.name])
                    })


                })
                .catch(error => console.log(error))
                .finally(() => setIsFetching(false));

        }
        getData()



    }, []);

    const TyepPokemon = ({ type }) => {
        return (
            <Text style={styles.boxType}>{type}</Text>
        );
    }



    if (isFetching) {
        return (
            <View style={styles.activityIndicatorContainer}>
                <ActivityIndicator size="small" color="#5a88ca" />
            </View>
        );
    } else {

        let colorStyles;

        if (e[0] == 'grass') {
            colorStyles = {
                backgroundColor: "#64c9a5"
            };
        } else if (e[0] == 'fire') {
            colorStyles = {
                backgroundColor: "#e56d6f"
            };
        } else if (e[0] == 'water') {
            colorStyles = {
                backgroundColor: "#6dadf4"
            };
        } else if (e[0] == 'bug') {
            colorStyles = {
                backgroundColor: "#774b8a"
            };
        } else if (e[0] == 'normal') {
            colorStyles = {
                backgroundColor: "#a76a6c"
            };
        }
        if (colorStyles == null) {
            return (
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator size="small" color="#5a88ca" />
                </View>
            );
        } else {
            return (
                <TouchableHighlight
                    style={styles.container}
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={() => navigation.navigate('DetailPokedex', { urlPokedex: item.url })}>
                    <View style={styles.twoCol}>
                        <View style={[styles.boxMenu, colorStyles]}>
                            <Text style={styles.boxTitle}>{item.name}</Text>
                            {e.map((f, i) => (
                                < TyepPokemon type={f} key={f + i} />
                            ))}
                            <Image style={styles.imageBox} source={{ uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${item.name}.png` }} />
                            <Image style={[styles.imageBox, styles.imageBackgroundBox]} source={require('../../../assets/images/pokedexlogo.png')} />
                        </View >
                    </View >
                </TouchableHighlight>
            );
        }
    }


}

export default ListItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 24,
    },
    twoCol: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        flexDirection: "row",
        flexWrap: 'wrap',
        maxHeight: 80
    },
    imageBox: {
        width: 100,
        height: 100,
        position: "absolute",
        right: -10,

    },
    imageBackgroundBox: {
        width: 80,
        height: 80,
        opacity: 0.1,
        bottom: -20
    },
    boxMenu: {
        flex: 1,
        width: "50%",
        height: 95,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'flex-start',
        position: "relative",
        overflow: "hidden",
        margin: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,

    },
    boxTitle: {
        color: '#ffffff',
        paddingStart: 12,
        fontFamily: "Nunito-Bold",
        textTransform: "capitalize",
        fontSize: 16
    },
    boxType: {
        color: '#ffffff',
        paddingHorizontal: 16,
        paddingVertical: 4,
        marginStart: 12,
        marginBottom: 6,
        borderRadius: 12,
        fontSize: 13,
        fontFamily: "Nunito-Regular",
        textTransform: "capitalize",
        backgroundColor: "rgba(255,255,255,0.3)"
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
    },
    activityIndicatorContainer: {
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
})