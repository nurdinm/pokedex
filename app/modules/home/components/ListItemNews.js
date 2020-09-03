import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Image } from 'react-native';


const ListItemNews = ({ item, index, navigation }) => {
    return (

        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD">
            <View style={styles.row}>
                <View>
                    <Text style={styles.title}>
                        Pokemon Rumble Rush Arrival Soon
                     </Text>
                    <Text style={styles.date}>
                        15 May 2019
                    </Text>
                </View>

                <Image source={require('../../../assets/images/tes.jpg')} style={styles.imageNews} />

            </View>
        </TouchableHighlight>

    );

};

export default ListItemNews;

const styles = StyleSheet.create({

    row: {
        borderBottomWidth: 1,
        borderColor: "#ccc",
        padding: 8,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'stretch',
        flexWrap: 'wrap',
        alignItems: 'center',
        overflow: "hidden"

    },
    imageNews: {
        width: 120,
        height: 80,
        borderRadius: 12
    },
    title: {
        width: 200,
        fontSize: 15,
    },
    date: {
        fontSize: 13,
        color: "#bfbfbf",
        paddingTop: 8
    }
});

