import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Header from '../shared/header';
import HabitSelector from '../screens/habitSelector';

const Stack = createStackNavigator();

/*AboutStack creates a stack of screens with the default being the About screen */
export default function HabitSelectorStack( {navigation} ) {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle:{backgroundColor:'orange'}
        }}>
            <Stack.Screen
                name="Choose your Habit"
                component={HabitSelector}
                options={{
                    headerLeft: () =>  <Header navigation={navigation} />
                }}
            />
        </Stack.Navigator>
    );
};