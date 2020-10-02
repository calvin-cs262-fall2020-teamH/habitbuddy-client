import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Header from '../shared/header';
import Settings from '../screens/settings';
import About from '../screens/about';
import Theme from '../screens/theme';

const Stack = createStackNavigator();

/*AboutStack creates a stack of screens with the default being the About screen */
export default function SettingsStack( {navigation} ) {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle:{backgroundColor:'orange'}
        }}>
            <Stack.Screen
                name="Settings"
                component={Settings}
                options={{
                    headerLeft: () =>  <Header navigation={navigation} />
                }}
            />
            <Stack.Screen
                name="About"
                component={About}
                options={{
                    title: "About"
                }}
            />
            <Stack.Screen
                name="Theme"
                component={Theme}
                options={{
                    title: "Theme"
                }}
            />
        </Stack.Navigator>
    );
};