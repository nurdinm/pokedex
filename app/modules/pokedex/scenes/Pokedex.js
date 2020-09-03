import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ListItem from '../components/ListItem';
import { getListPokemon, getTypePokemon } from '../api';
import { addData } from '../actions';

export default function Pokedex({ navigation }) {
    const dispatch = useDispatch();
    const [isFetching, setIsFetching] = useState(false);
    const dataReducer = useSelector((state) => state.dataPokedexReducer);
    const { data } = dataReducer;

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            getData();
        }
        return () => { isMounted = false };

    }, []);


    const getData = () => {
        setIsFetching(true);
        getListPokemon()
            .then(res => res.data)
            .then((data) => {
                dispatch(addData(data.results))
            })
            .catch(error => console.log(error))
            .finally(() => setIsFetching(false));
    }

    const renderItem = ({ item, index }) => {
        return (
            <ListItem item={item} index={index} navigation={navigation} />
        )
    };

    // console.log(data.name);

    if (isFetching) {
        return (
            <View style={styles.activityIndicatorContainer}>
                <ActivityIndicator size="small" color="#5a88ca" />
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.listItem}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => `flat_${index}`}
                    numColumns={2}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        zIndex: 9999

    },
    listItem: {
        paddingStart: 16,
        paddingEnd: 16,
    },
    activityIndicatorContainer: {
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
})