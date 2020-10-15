import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles, colorCodes } from '../../styles/global';

/* Lets you change your notification settings */
export default function Notifications() {
    return (
        <View style={globalStyles.container}>
            <Text>Edit your notification settings here!</Text>
        </View>
    );
};