import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import About from './About';
import Stat from './Stat';
import Evolutions from './Evolutions';
import Move from './Move';
import { StyleSheet } from 'react-native';
const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            activeColor="#e91e63"
            screenOptions={{ header: null }}
            tabBarOptions={{
                labelStyle: styles.labelStyles,
                tabStyle: { width: 100 },
                style: styles.tabStyles,
            }}
        >
            <Tab.Screen
                name="About"
                component={About}
                options={{
                    tabBarLabel: 'About',

                }}
            />
            <Tab.Screen
                name="Stats"
                component={Stat}
                options={{
                    tabBarLabel: 'Base Stats',

                }}
            />
            <Tab.Screen
                name="Evolutions"
                component={Evolutions}
                options={{
                    tabBarLabel: 'Evolutions',

                }}
            />
            <Tab.Screen
                name="Move"
                component={Move}
                options={{
                    tabBarLabel: 'Move',

                }}
            />
        </Tab.Navigator>
    );
}

export default TabNavigator;

const styles = StyleSheet.create({
    labelStyles: {
        fontSize: 12,
        textTransform: 'capitalize',
        borderRadius: 25
    },
    tabStyles: {
        elevation: 0,
        zIndex: 9999
    },
})