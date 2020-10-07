import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

import Card from '../shared/card';
import Profile from '../shared/profile';

export default function BuddyDetails({ route, navigation }) {
    return (
        <View style={globalStyles.container}>
            <Profile>
                <Text style={globalStyles.titleText}>{ route.params.name }</Text>
                <Text>Habits: { route.params.habit }</Text>
                <Text>Hobbies: { route.params.hobby }</Text>
            </Profile>
        </View>
    );
}
