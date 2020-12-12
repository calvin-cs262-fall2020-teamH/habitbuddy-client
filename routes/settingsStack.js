import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../shared/header';
import Settings from '../screens/settings';
import Theme from '../screens/settingsScreens/theme';
import About from '../screens/settingsScreens/about';
import ChangePassword from '../screens/settingsScreens/changePassword';

const Stack = createStackNavigator();

/**
 * SettingsStack creates a stack for setting screens
 * @param {var} navigation 
 * @return {property} Navigator
 */

export default function SettingsStack({ navigation }) {

    return (
        <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: 'orange' }
        }}>
            <Stack.Screen
                name="Settings"
                component={Settings}
                options={{
                    headerLeft: () => <Header navigation={navigation} />,
                    headerTitleAlign: { textAlign: 'center' },
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
                name="Change Password"
                component={ChangePassword}
                options={{
                    title: "Change Password"
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