import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../styles/global';

/* Lets your change your theme */
export default function Theme() {
    return (
        <View style={globalStyles.container}>
            <Text>Change your theme here!</Text>
        </View>
    );
};