import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProgressBar } from '@react-native-community/progress-bar-android';

function Stat() {
    return (
        <View style={styles.container}>
            <View style={styles.containerStat}>
                <Text style={styles.nameStat}>HP</Text>
                <Text style={styles.valueStat}>45</Text>
                <ProgressBar
                    style={styles.pbStat}
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={0.45}
                    color='#c86c79'
                />
            </View>
            <View style={styles.containerStat}>
                <Text style={styles.nameStat}>Attack</Text>
                <Text style={styles.valueStat}>60</Text>
                <ProgressBar
                    style={styles.pbStat}
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={0.6}
                />
            </View>
            <View style={styles.containerStat}>
                <Text style={styles.nameStat}>Defense</Text>
                <Text style={styles.valueStat}>48</Text>
                <ProgressBar
                    style={styles.pbStat}
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={0.48}
                    color='#c86c79'
                />
            </View>
            <View style={styles.containerStat}>
                <Text style={styles.nameStat}>Sp. Atk</Text>
                <Text style={styles.valueStat}>65</Text>
                <ProgressBar
                    style={styles.pbStat}
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={0.65}
                />
            </View>
            <View style={styles.containerStat}>
                <Text style={styles.nameStat}>Sp. Def</Text>
                <Text style={styles.valueStat}>65</Text>
                <ProgressBar
                    style={styles.pbStat}
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={0.65}
                />
            </View>
            <View style={styles.containerStat}>
                <Text style={styles.nameStat}>Speed</Text>
                <Text style={styles.valueStat}>45</Text>
                <ProgressBar
                    style={styles.pbStat}
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={0.45}
                    color='#c86c79'
                />
            </View><View style={styles.containerStat}>
                <Text style={styles.nameStat}>Total</Text>
                <Text style={styles.valueStat}>317</Text>
                <ProgressBar
                    style={styles.pbStat}
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={0.7}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor:'#ffffff'
    },
    containerStat: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        flex: 1,
        maxHeight: 35,
    },
    nameStat: {
        flex: 2,
        color: '#b3afb4',
        fontFamily: 'Nunito-Regular'
    },
    valueStat: {
        flex: 1,
    },
    pbStat: {
        flex: 3,
    }
})

export default Stat;