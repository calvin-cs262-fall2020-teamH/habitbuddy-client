import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Header from '../shared/header';
import Buddies from '../screens/buddies';
import BuddyDetails from '../screens/buddyDetails';

const Stack = createStackNavigator();

/*BuddiesStack creates a stack of screens with the default being the Buddies screen */
export default function BuddiesStack({navigation}) {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {backgroundColor: 'orange'}
        }}>
            <Stack.Screen
                name="Buddies"
                component={Buddies}
                options={{
                    headerLeft: () => <Header navigation={navigation}/>
                }}
            />
            <Stack.Screen
                name="BuddyDetails"
                component={BuddyDetails}
                options={{title: 'Buddy Details'}}
            />
        </Stack.Navigator>
    );
};
