import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Header from '../shared/header';
import Home from '../screens/home';

const Stack = createStackNavigator();

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
                    title: 'HabitBuddy',
                    headerTitleAlign: {textAlign:'center'},
                    headerLeft: () =>  <Header navigation={navigation} />
                }}
            />
        </Stack.Navigator>
    );
};
