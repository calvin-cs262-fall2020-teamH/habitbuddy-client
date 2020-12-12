import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../shared/header';
import Buddies from '../screens/buddies';
import BuddyDetails from '../screens/buddyDetails';
import { MaterialIcons } from "@expo/vector-icons";
import { globalStyles } from "../styles/global";
import { Alert } from 'react-native';
import CommonDataManager from '../data/CommonDataManager';

const Stack = createStackNavigator();

/** 
 * BuddiesStack creates stack of Buddies and BuddyDetails screens 
 * @default {Buddies}
 * @param {var} navigation
 * @return {property} Navigator
 */
export default function BuddiesStack({ navigation }) {
    // Alert box for HabitTracking info icon
    const alert = () => {
        Alert.alert('What are Buddies?',
            "Buddies are other users that have the same habit category as you! By tapping on a buddy, you will be directed to their profile page where you can connect with them and grow your community.",
            [{ text: "Got it!" }])
    }

    const commonData = CommonDataManager.getInstance();

    async function deleteBuddy() {
        await fetch(`http://habit-buddy.herokuapp.com/user/` + commonData.getUserID() + '/' + commonData.getViewingBuddy(), {
            method: 'DELETE', headers: { 'Content-Type': 'application/json' }
        })
            .catch((error) => { console.error(error) });

        commonData.deleteBuddy();
    }

    return (
        <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: 'orange' }
        }}>
            <Stack.Screen
                name="Buddies"
                component={Buddies}
                options={{
                    headerLeft: () => <Header navigation={navigation} />,
                    headerTitleAlign: { textAlign: 'center' },
                    headerRight: () => (
                        <MaterialIcons name="info-outline" size={27} color='#333' style={globalStyles.leftIcon}
                            onPress={alert} />

                    )
                }} />
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
                                    { text: "Delete", onPress: () => deleteBuddy() } //delete the buddy here
                                ],
                                { cancelable: false }
                            )}
                        />
                    ),
                }}
            />
        </Stack.Navigator>
    );
};
