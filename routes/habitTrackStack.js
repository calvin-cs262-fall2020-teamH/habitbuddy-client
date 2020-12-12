import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { globalStyles } from '../styles/global';
import { Alert } from 'react-native';
import BuddyDetails from '../screens/buddyDetails';
import Header from '../shared/header';
import HabitTrack from '../screens/habitTrack';

const Stack = createStackNavigator();

/** 
 * HabitTrackStack creates stack of Buddies and BuddyDetails screens
 * @param {var} navigation
 * @return {property} Navigator
 */
export default function HabitTrackStack({ navigation }) {
    // Alert box for HabitTracking info icon
    const alert = () => {
        Alert.alert('How to track my Habit?',
            "Suppose you want to track your habit for the day.\n\n1. Each grey block represents a day. Tap on the day of the week you did your habit.\n2. Watch “My Streak“ count in the “Streak Leaderboard“ increase. “My Streak” shows the number of consecutive days your habit was completed (including the days from previous weeks!).\n   Each week all your blocks get refreshed into grey color.\n\nGet motivated to stick to your habit as you watch your streaks grow!",
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
                name="Habit Tracker"
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
                options={{
                    title: 'Buddy Details',
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
                            } />

                    ),
                }}
            />

        </Stack.Navigator>
    );
};