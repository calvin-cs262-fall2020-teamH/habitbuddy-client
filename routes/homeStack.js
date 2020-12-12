import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Header from '../shared/header';
import Home from '../screens/home';

const Stack = createStackNavigator();

/** 
 * HomeStack creates stack for home screen navigation 
 * @author Andrew Baker (andrewJamesBaker)
 * @default {Home}
 * @param {var} navigation
 * @return {property} Navigator
 */
export default function HomeStack( {navigation} ) {

    return (
        <Stack.Navigator screenOptions={{
            headerStyle:{backgroundColor:'orange'}
        }}>
            <Stack.Screen
                name="HabitBuddy"
                component={Home}
                options={{
                    title: 'HabitBuddy',
                    headerTitleAlign: {textAlign:'center'},
                    headerLeft: () =>  <Header navigation={navigation} />
                }}
            />
        </Stack.Navigator>
    );
};
