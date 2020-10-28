/* drawer.js creates the drawer in the top right which lists all the pages a user can access */

import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './homeStack';
import Buddies from './buddiesStack';
import Profile from './profileStack';
import Habittrack from './habittrackStack';
import Settings from './settingsStack';
import { colorCodes } from '../styles/global';

const Tab = createBottomTabNavigator();

export default function App({navigation}) {
    return (
        <Tab.Navigator initialRouteName="Home"
            // drawerStyle={{backgroundColor: colorCodes.front}}
            // drawerContentOptions={{
            //     inactiveTintColor: colorCodes.lightText
            // }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'Home') {
                    iconName = 'md-home';
                  } else if (route.name === 'Settings') {
                    iconName = 'md-settings'
                  } else if (route.name === 'Profile') {
                    iconName = 'md-person';
                  } else if (route.name === 'Buddies') {
                    iconName = 'md-people';
                  } else if (route.name === 'Habit Track') {
                    iconName = 'md-calendar';
                  }
      
                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
              })}
              tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
              }}
        > 
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Buddies" component={Buddies} />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Habit Track" component={Habittrack}/>
            <Tab.Screen name="Settings" component={Settings} />

        </Tab.Navigator>
    );
};
