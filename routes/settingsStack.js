import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Header from '../shared/header';
import Settings from '../screens/settings';
import Theme from '../screens/settingsScreens/theme';
import Account from '../screens/settingsScreens/account';
import About from '../screens/settingsScreens/about';

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
                name="Theme"
                component={Theme}
                options={{
                    title: "Theme"
                }}
            />
            <Stack.Screen
                name="Account"
                component={Account}
                options={{
                    title: "Account"
                }}
            />
            <Stack.Screen
                name="About"
                component={About}
                options={{
                    title: "About"
                }}
            />
        </Stack.Navigator>
    );
};