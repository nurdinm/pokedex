import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from './modules/home';
import { Pokedex } from './modules/pokedex';
import { Text } from 'react-native';
import HeaderPokedex from './modules/pokedex/components/HeaderPokedex';
import { DetailPokedex } from './modules/detailpokedex';
import HeaderDetailPokedex from './modules/detailpokedex/components/HeaderDetailPokedex';

const Stack = createStackNavigator();

const MyStack = (navigation) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
                <Stack.Screen
                    name="Pokedex"
                    component={Pokedex}
                    options={{
                        title: '',
                        headerStyle: {
                            backgroundColor: '#fff',
                            elevation: 0,
                        },
                        headerRight: () => (
                            <HeaderPokedex />
                        )
                    }}
                />
                <Stack.Screen
                    name="DetailPokedex"
                    component={DetailPokedex}
                    options={{
                        title: '',
                        headerTintColor: '#ffffff',
                        headerStyle: {
                            backgroundColor: '#64dbb3',
                            elevation: 0,
                        },
                        headerRight: () => (
                            <HeaderDetailPokedex />
                        )
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MyStack;