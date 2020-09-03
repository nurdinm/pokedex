import React, { useState, useEffect, useMemo } from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList, Text, Button, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ListItem from '../components/ListItem';
import { getListPokemon, getTypePokemon } from '../api';
import { addData } from '../actions';
import Poke from '../components/Poke';
import BottomSheet from 'reanimated-bottom-sheet';

import TabNavigator from '../components/topTabNav/TabNavigator';
import Animated from 'react-native-reanimated';


export default function DetailPokedex({ navigation }) {
    const dispatch = useDispatch();
    const [isFetching, setIsFetching] = useState(false);
    const dataReducer = useSelector((state) => state.dataPokedexReducer);
    const { data } = dataReducer;
    let fall = useMemo(() => new Animated.Value(1), []);

    const renderContent = () => (
        <View
            style={{
                backgroundColor: 'white',
                height: 650,
                paddingTop: 30
            }}
        >
            <TabNavigator />
        </View>
    );

    useEffect(() => {
        // getData();

    }, [fall]);


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

    // if (isFetching) {
    //     return (
    //         <View style={styles.activityIndicatorContainer}>
    //             <ActivityIndicator size="small" color="#5a88ca" />
    //         </View>
    //     );
    // } else {
    //     return (
    //         <View style={styles.container}>
    //             <FlatList
    //                 style={styles.listItem}
    //                 data={data}
    //                 renderItem={renderItem}
    //                 keyExtractor={(item, index) => `flat_${index}`}
    //                 numColumns={2}
    //             />
    //         </View>
    //     );
    // }
    console.log('data' + fall);
    return (
        <>
            <View style={styles.container}>
                <Poke />

            </View>
            <BottomSheet
                initialSnap={1}
                snapPoints={[650, 400]}
                borderRadius={24}
                callbackNode={fall}
                renderContent={renderContent}

            />
            <Animated.View
                style={{
                    alignItems: 'center',
                    position: 'absolute',
                    top: Animated.add(0, Animated.multiply(fall, 100)),
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 9999,
                    height: Animated.add(0, Animated.multiply(fall, 100)),
                    transform: [{ scale: Animated.add(0, Animated.multiply(fall, 1)) }],
                    opacity: Animated.add(0, Animated.multiply(fall, 1)),
                }}>
                <Image style={styles.imagePoke} source={require('../../../assets/images/bulbasaur.png')} />
            </Animated.View>


        </>
    );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        position: 'relative',
    },
    activityIndicatorContainer: {
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    tabContainer: {
        flex: 1,
    },
    imageContainer: {
        alignItems: 'center',
        position: 'absolute',
        top: 100,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999

    },
    imagePoke: {
        width: 200,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center'
    }
})