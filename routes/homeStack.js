import React from 'react';
import { Text, } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Header from '../shared/header';
import Home from '../screens/home';
import loginStack from './loginStack';

const Stack = createStackNavigator();
const LoggedIn = false;

/*HomeStack creates a stack of screens with the default being the Home screen */
export default function HomeStack( {navigation} ) {

    // if(!LoggedIn) {
    //     navigation.navigate('Login');
    // }

    return (
        <Stack.Navigator screenOptions={{
            headerStyle:{backgroundColor:'orange'}
        }}>
            <Stack.Screen
                name="HabitBuddy"
                component={Home}
                options={{
                    headerLeft: () =>  <Header navigation={navigation} />
                }}
            />
            <Stack.Screen
                name="Login"
                component={loginStack}
                options={{
                    title: 'Login',
                    headerLeft: () => false,
                }}
            />
        </Stack.Navigator>
    );
};
