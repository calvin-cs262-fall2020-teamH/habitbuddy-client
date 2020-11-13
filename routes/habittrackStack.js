import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Header from '../shared/header';
import Habittrack from '../screens/habittrack';

const Stack = createStackNavigator();

export default function HabittrackStack( {navigation} ) {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle:{backgroundColor:'orange'}
        }}>
            <Stack.Screen
                name="Habittrack"
                component={Habittrack}
                options={{
                    headerTitleAlign: {
                        textAlign: 'center'
                    },
                    headerLeft: () =>  <Header navigation={navigation} />
                }}
            />
        </Stack.Navigator>
    );
};