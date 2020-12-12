import React, { useState } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MaterialIcons} from '@expo/vector-icons';
import {globalStyles} from '../styles/global';
import Header from '../shared/header';
import Profile from '../screens/profile';
import EditProfile from "../screens/editProfile";


const Stack = createStackNavigator();

/** 
 * ProfileStack creates stack for profile and edit profile navigation 
 * @default {Profile}
 * @param {var} navigation
 * @return {property} Navigator
 */
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
                    headerTitleAlign: {textAlign:'center'},
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