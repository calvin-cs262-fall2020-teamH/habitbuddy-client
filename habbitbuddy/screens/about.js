import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles, colorCodes } from '../styles/global';

/* About outputs the content of the About page */
export default function About() {
    return (
        <View style={globalStyles.container}>
            <Text>Created by: Andrew Baker, Dawson Buist, Joe Pastucha, Belina Sainju, Nathan Strain, and Kelsey Yen</Text>
        </View>
    );
};