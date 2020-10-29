import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles, colorCodes } from '../../styles/global';

// Written by Kelsey Yen
// Based on Vision statement

/* About outputs the content of the About page */
export default function About() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.aboutHeader}>Our Vision</Text>
            <Text style={globalStyles.aboutText}>
                Inspired by John Clear's book,
                <Text style={{fontStyle: 'italic'}}> Atomic Habits</Text>
                , Habit Buddy started as a semester-long project for our CS262-Software Engineering course at Calvin University.
                Our vision for the app is based on Clear's four laws outlined in his book:
                1. Make it obvious.
                    The app notifications help remind you of your commitment to a new habit and by matching you with a Buddy, provides 
                    a means of personal accountablity. 
                2. Make it easy.
                    The app helps you anchor a new habit to something you already enjoy through the "Habit Stacking" feature. 
                    {/* <TouchableOpacity style={globalStyles.loginButtonContainer} onPress={() => navigation.navigate('HabitBuddy')}></TouchableOpacity> */}
                3. Make it attractive.
                    The app inspires you to work dilligently towards your goals by matching you with a Buddy who shares your goals, 
                    interest, or even already maintains your desired habit.
                4. Make it satisfying.
                    The app keeps you motivated and rewarded through our habit tracking feature and the ability to see the progress of your Buddies.
            </Text>
            <Text style={globalStyles.aboutText}>
                Created by: Andrew Baker, Dawson Buist, Joe Pastucha, Belina Sainju, Nathan Strain, and Kelsey Yen
            </Text>
        </View>
    );
};