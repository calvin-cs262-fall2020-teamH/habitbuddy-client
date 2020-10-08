import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

/* About outputs the content of the About page */
export default function HabitSelector() {
    return (
        <View style={globalStyles.container}>
            <Text>Choose your habit</Text>
        </View>
    );
};