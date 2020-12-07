import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Header from '../shared/header';
import Buddies from '../screens/buddies';
import BuddyDetails from '../screens/buddyDetails';
import {MaterialIcons} from "@expo/vector-icons";
import {globalStyles} from "../styles/global";
import {Alert} from 'react-native';

const Stack = createStackNavigator();

/*BuddiesStack creates a stack of screens with the default being the Buddies screen */
export default function BuddiesStack({navigation}) {
    // Alert box for HabitTracking info icon
    const alert = () => {
        Alert.alert('What are Buddies?',
            "Buddies are other user that have the same habit category as you! By tapping on any of their names, you are directed to their profile page where you can connect and grow your community",
            [
                { text: "Got it!" }
            ]
        )
    }

    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {backgroundColor: 'orange'}
        }}>
            <Stack.Screen
                name="Buddies"
                component={Buddies}
                options={{
                    headerLeft: () =>  <Header navigation={navigation} />,
                    headerTitleAlign: {textAlign:'center'},
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
