import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

/* Profile outputs the content of the Profile page */
export default function Profile() {
    return (
        
        <View style={globalStyles.container}>
            <Text>Welcome to your profile!</Text>
        </View>
    );
};