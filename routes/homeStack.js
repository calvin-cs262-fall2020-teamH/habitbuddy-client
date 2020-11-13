import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Header from '../shared/header';
import Home from '../screens/home';
import Buddies from '../screens/buddies';
import Habittrack from '../screens/habittrack';
import BuddyDetails from '../screens/buddyDetails';

const Stack = createStackNavigator();

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
                    headerTitleAlign: {
                        textAlign: 'center'
                    },
                    headerLeft: () =>  <Header navigation={navigation} />
                }}
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
