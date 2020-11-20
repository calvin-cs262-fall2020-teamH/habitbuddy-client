import React from 'react';
import { Text, ScrollView } from 'react-native';
import { useDynamicValue } from 'react-native-dynamic';
import { dynamicStyles } from '../../styles/global';

// Written by Kelsey Yen
// Based on Vision statement

/* About outputs the content of the About page */
export default function About() {

    const dyStyles = useDynamicValue(dynamicStyles);

    return (
        <ScrollView style={dyStyles.aboutScrollView}>
            <Text style={dyStyles.aboutHeader}>Our Story</Text>
            <Text style={dyStyles.aboutText}>HabitBuddy started as a semester-long project for our CS262-Software Engineering 
                course at Calvin University. While learning the ways of ReactNative, JavaScript, GitHub, and Trello, our team worked 
                diligently to create an app that we hope inspires and encourages our clients to build good habits and make new connections.
                </Text>
            <Text style={dyStyles.aboutHeader}>Our Vision</Text>
            <Text style={dyStyles.aboutText}>
                Inspired by John Clear's book,
                <Text style={{fontStyle: 'italic'}}> Atomic Habits</Text>
                , HabitBuddy is based on four laws: {'\n'}
                {'\n'}<Text style={{fontWeight: 'bold'}}>1. Make it obvious. </Text>
                The app helps remind you of your commitment to a new habit by matching you with a Buddy, providing 
                a means of personal accountablity, and through the built-in app notifications. {'\n'} {'\n'}
                <Text style={{fontWeight: 'bold'}}>2. Make it easy. </Text> 
                The app helps you anchor a new habit to something you already enjoy through the "Habit Stacking" feature. 
                {/* <TouchableOpacity style={globalStyles.loginButtonContainer} onPress={() => 
                    navigation.navigate('HabitBuddy')}></TouchableOpacity> */} {'\n'} {'\n'}
                <Text style={{fontWeight: 'bold'}}>3. Make it attractive. </Text> 
                The app inspires you to work dilligently towards your goals by matching you with a Buddy who shares your goals, 
                interest, or even already maintains your desired habit. {'\n'} {'\n'}
                <Text style={{fontWeight: 'bold'}}>4. Make it satisfying. </Text>
                The app keeps you motivated and rewarded through our Habit Tracker and the ability to see the progress 
                of your Buddies. {'\n'} {'\n'}
                Created By: Andrew Baker, Dawson Buist, Joe Pastucha, Belina Sainju, Nathan Strain, and Kelsey Yen {'\n'}
                </Text>
            </ScrollView>
    );
};