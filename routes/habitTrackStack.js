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
            "Habit Track is a feature you can use to cross off the days you do your habit. Each grey block represents a day. Simply click on a day to highlight it orange once you do your habit. Each week all your blocks get refreshed into grey color.\n\nYour streak shows you how many days in a row you have kept your habit (including the days from previous weeks!). The Daily Streak Board lets you compare your streak with your buddies as well.\n\nGet motivated to stick to your habit as you watch your streaks grow!",
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