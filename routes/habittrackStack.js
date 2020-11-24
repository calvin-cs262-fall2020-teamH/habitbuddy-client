import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { globalStyles } from '../styles/global';
import { TouchableHighlight, Alert } from 'react-native';
// import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import Header from '../shared/header';
import Habittrack from '../screens/habittrack';
import AboutHabittrack from '../screens/aboutHabittrack';

const Stack = createStackNavigator();

export default function HabittrackStack({ navigation }) {
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
                component={Habittrack}
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


        </Stack.Navigator>
    );
};
