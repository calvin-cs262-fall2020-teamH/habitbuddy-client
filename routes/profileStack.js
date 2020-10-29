import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';
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
                    headerLeft: () =>  <Header navigation={navigation} />,
                    headerRight: () => (
                        <MaterialIcons name="edit" size={27} color='#333' style={globalStyles.leftIcon}
                        onPress={() => navigation.navigate('EditProfile')}/>
                    ),
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