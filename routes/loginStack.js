import React from 'react';
import { Text, } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../screens/login';
import EmptyProfile from '../screens/emptyProfile'
import EmptyHabits from '../screens/emptyHabits'

const Stack = createStackNavigator();

/*LoginStack creates a stack of screens with the default being the Login screen */
export default function LoginStack( {navigation} ) {
    return (
        <Stack.Navigator 
            initialRouteName="Login"
            screenOptions={{
                headerStyle:{backgroundColor:'orange'},
            }}
        >
            <Stack.Screen
                name='Login'
                component={Login}
                options = {{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='EmptyProfile'
                component={EmptyProfile}
                options={{
                    title: 'Profile',
                }}
            />
            <Stack.Screen
                name='EmptyHabits'
                component={EmptyHabits}
                options={{title: 'Habits'}}
            />
        </Stack.Navigator>
    );
};