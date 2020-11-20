import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { globalStyles } from '../styles/global';
import { Alert } from 'react-native';

import Header from '../shared/header';
import HabitTrack from '../screens/habitTrack';

const Stack = createStackNavigator();

export default function HabitTrackStack( {navigation} ) {
   const alert = () => {
       Alert.alert('How to track my Habit?',
           "Habit Track is a feature where you can cross off the days you do your habit. Each grey square represents a day. Simply click on a day to highlight it once you do your habit. Your streak shows you how many days in a row you have kept your habit. Get motivated to continue your habit as you watch your streaks grow!"
       )
   }
    return (
        <Stack.Navigator screenOptions={{
            headerStyle:{backgroundColor:'orange'}
        }}>
            <Stack.Screen
                name="Habit Tracker"
                component={HabitTrack}
                options={{
                    headerLeft: () =>  <Header navigation={navigation} />,
                    headerTitleAlign: {textAlign:'center'},
                    headerRight: () => ( 
                        <MaterialIcons name="info-outline" size={27} color='#333' style={globalStyles.leftIcon}
                        onPress= {alert}
                        />
                        
                    ),

                }}
            />


        </Stack.Navigator>
    );
};