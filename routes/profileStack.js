import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Header from '../shared/header';
import Profile from '../screens/profile';

import EditProfile from "../screens/editProfile";
import BuddyDetails from "../screens/buddyDetails";


const Stack = createStackNavigator();

/*ProfileStack creates a stack of screens with the default being the Profile screen */
export default function ProfileStack( {navigation} ) {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle:{backgroundColor:'orange'}
        }}>
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerLeft: () =>  <Header navigation={navigation} />
                }}
            />

            <Stack.Screen
                name="EditProfile"
                component={EditProfile}
                options={{title: 'Edit Profile'}}
            />

        </Stack.Navigator>
    );
};