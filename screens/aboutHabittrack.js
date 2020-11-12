import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { globalStyles, colorCodes } from '../../styles/global';

/* About outputs the content of the About page */
export default function AboutHabittrack() {
    return (
        <ScrollView style={globalStyles.aboutScrollView}>
            <Text style={globalStyles.aboutText}>
                Inspired by John Clear's book,
                <Text style={{fontStyle: 'italic'}}> Atomic Habits{'\n'}</Text>
                <Text style={{fontWeight: 'bold'}}>Make your new habit satisfying. </Text>
                Tracking your habit keeps you motivated as you see your progress and your Buddies' progresses. 
                of your Buddies. {'\n'} {'\n'}
                </Text>
            </ScrollView>
    );
};