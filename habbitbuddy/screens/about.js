import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

/* About outputs the content of the About page */
export default function About() {
    return (
        <View>
            <Text style={globalStyles.aboutHeader}>Our Story</Text>
            <Text style={globalStyles.aboutText}>
                Inspired by John Clear's book,
                <Text style={{fontStyle: 'italic'}}> Atomic Habits</Text>
                , Habit Buddy started as a meager project for our CS262-Software Engineering course at Calvin University.

            </Text>
            <Text style={globalStyles.aboutText}>Created by: Andrew Baker, Dawson Buist, Joe Pastucha, Belina Sainju, Nathan Strain, and Kelsey Yen</Text>
        </View>
    );
};