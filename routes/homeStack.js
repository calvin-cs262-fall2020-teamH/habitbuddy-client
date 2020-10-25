import React from 'react';
import { Text, } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Header from '../shared/header';
import Home from '../screens/home';
import Login from '../screens/login';
import EmptyProfile from '../screens/emptyProfile'
import EmptyHabits from '../screens/emptyHabits'
import Buddies from '../screens/buddies';
import Habittrack from '../screens/habittrack';
import BuddyDetails from '../screens/buddyDetails';

const Stack = createStackNavigator();
const LoggedIn = false;

/*HomeStack creates a stack of screens with the default being the Home screen */
export default function HomeStack( {navigation} ) {

    // if(!LoggedIn) {
    //     navigation.navigate('Login');
    // }

    return (
        <Stack.Navigator screenOptions={{
            headerStyle:{backgroundColor:'orange'}
        }}>
            <Stack.Screen
                name="HabitBuddy"
                component={Home}
                options={{
                    title: 'HabitBuddy',
                    headerLeft: () =>  <Header navigation={navigation} />
                }}
            />
            {/* Login and Sign Up Screens */}
            <Stack.Screen
                name='Login'
                component={Login}
                options = {{
                    title: 'Login',
                    headerLeft: null,
                }}
            />
            <Stack.Screen
                name='EmptyProfile'
                component={EmptyProfile}
                options={{
                    title: 'Profile',
                }}
            />
            <Stack.Screen
                name='EmptyHabits'
                component={EmptyHabits}
                options={{title: 'Habits'}}
            />
            <Stack.Screen
                name="Buddies"
                component={Buddies}
                options={{title: 'Buddies'}}
            />
            <Stack.Screen
                name="Habittrack"
                component={Habittrack}
                options={{title: 'Habit Tracker'}}
            />
            <Stack.Screen
                name="BuddyDetails"
                component={BuddyDetails}
                options={{title: 'Buddy Details'}}
            />
        </Stack.Navigator>
    );
};
