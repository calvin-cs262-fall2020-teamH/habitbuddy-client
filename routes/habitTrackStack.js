import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { globalStyles } from '../styles/global';
import { Alert } from 'react-native';
import BuddyDetails from '../screens/buddyDetails';
import Header from '../shared/header';
import HabitTrack from '../screens/habitTrack';

const Stack = createStackNavigator();

export default function HabitTrackStack({ navigation }) {
    // Alert box for HabitTracking info icon
    const alert = () => {
        Alert.alert('How to track my Habit?',
            "Suppose you want to track your habit for the day.\n\n1. Go to Home Screen and tap on the “Streak“ card to go to “Habit Track” screen.\n2. Then, tap on the day of the week.\n3. Watch “My Streak“ count in the “Streak Leaderboard“ increase. Watch “My Streak“ count in the “Streak Leaderboard“ increase. “My Streak” shows the number of consecutive days your habit was completed.\n",
            [
                { text: "Got it!" }
            ]
        )
    }
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: 'orange' }
        }}>
            <Stack.Screen
                name="Habit Track"
                component={HabitTrack}
                options={{
                    headerLeft: () => <Header navigation={navigation} />,
                    headerTitleAlign: { textAlign: 'center' },
                    headerRight: () => (
                        <MaterialIcons name="info-outline" size={27} color='#333' style={globalStyles.leftIcon}
                            onPress={alert}
                        />

                    ),
                }}
            />
            <Stack.Screen
                name="BuddyDetails"
                component={BuddyDetails}
                options={{title: 'Buddy Details',
                    headerTitleAlign: {
                        textAlign: 'center'
                    },
                    headerRight: () => (
                        <MaterialIcons name="delete" size={27} color='#333' style={globalStyles.leftIcon}
                                       onPress={() => Alert.alert(
                                           "Delete Buddy",
                                           "Are you sure you want to delete your buddy?",
                                           [
                                               {
                                                   text: "Cancel",
                                                   onPress: () => console.log("Cancel Pressed"),
                                                   style: "cancel"
                                               },
                                               { text: "Delete", onPress: () => console.log("OK Pressed") } //delete the buddy here
                                           ],
                                           { cancelable: false }
                                       )
                                       }/>

                    ),
                }}
            />

        </Stack.Navigator>
    );
};