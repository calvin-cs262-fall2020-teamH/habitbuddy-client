/* drawer.js creates the drawer in the top right which lists all the pages a user can access */

import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
                    iconName = focused ? 'home' : 'home-outline';
                  } else if (route.name === 'Settings') {
                    iconName = focused ? 'settings' : 'settings-outline';
                  } else if (route.name === 'Profile') {
                    iconName = focused ? 'account' : 'account-outline';
                  } else if (route.name === 'Buddies') {
                    iconName = focused ? 'account-multiple' : 'account-multiple-outline';
                  } else if (route.name === 'Habit Track') {
                    iconName = focused ? 'calendar-month' : 'calendar-month-outline';
                  }
      
                  // You can return any component that you like here!
                  return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                },
              })}
              tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
                style:{height:50},
                //showLabel: false,
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
