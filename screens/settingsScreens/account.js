import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles, colorCodes } from '../../styles/global';

/* Lets you change your account settings */
export default function Account() {
    return (
        <View style={globalStyles.container}>
            <Text>Edit your account details here!</Text>
        </View>
    );
};