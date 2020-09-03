import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function About() {
    return (
        <View style={styles.container}>
            <Text style={styles.textAbout}>Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.</Text>
            <View style={styles.boxHeight}>
                <View style={styles.contentHeight}>
                    <Text style={{ color: '#bbb8bc', fontFamily: 'Nunito-Regular' }}>Height</Text>
                    <Text style={{ fontFamily: 'Nunito-Regular' }}>2'3.6" (0.70 cm)</Text>
                </View>
                <View style={styles.contentHeight} >
                    <Text style={{ color: '#bbb8bc', fontFamily: 'Nunito-Regular' }}>Weight</Text>
                    <Text style={{ fontFamily: 'Nunito-Regular' }}>15.2 lbs (6.9 kg)</Text>
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
    textAbout: {
        fontFamily: 'Nunito-SemiBold'
    },
    boxHeight: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 10,
        padding: 24,
        borderRadius: 24,
        backgroundColor: '#ffffff',
        marginTop: 16
    },
    contentHeight: {
        paddingEnd: 24,
        paddingStart: 24,
    }
})
export default About;
