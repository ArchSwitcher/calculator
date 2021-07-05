import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../screens/login';
import History from '../screens/history'
import Calculator from '../screens/calculator'

const { Navigator, Screen } = createStackNavigator();

const loginStack = () => (
    <NavigationContainer>
        <Navigator headerMode="none" initalRouteName="Login">
            <Screen name="Login" component={Login}></Screen>
            <Screen name="History" component={History}></Screen>
            <Screen name="Calculator" component={Calculator}></Screen>
        </Navigator>
    </NavigationContainer>
)

export default loginStack;