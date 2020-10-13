/* drawer.js creates the drawer in the top right which lists all the pages a user can access */

import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../routes/homeStack';
import Buddies from '../routes/buddiesStack';
import Profile from '../routes/profileStack';
import HabitSelector from '../routes/habitSelectorStack';
import Habittrack from '../routes/habittrackStack';
import Settings from '../routes/settingsStack';
import Login from '../routes/loginStack';
import { colorCodes } from '../styles/global';
// import About from '../routes/aboutStack';

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <Drawer.Navigator initialRouteName="Home" drawerStyle={{backgroundColor: colorCodes.front}}
            drawerContentOptions={{
                inactiveTintColor: colorCodes.lightText
            }}
        > 
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Buddies" component={Buddies} />
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Habit Selector" component={HabitSelector} />
            <Drawer.Screen name="Habit Track" component={Habittrack}/>
            <Drawer.Screen name="Settings" component={Settings} />

        </Drawer.Navigator>
    );
};
