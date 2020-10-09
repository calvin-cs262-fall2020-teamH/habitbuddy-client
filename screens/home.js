import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function Home({ navigation }) {
    
    return (
        <View style={globalStyles.container}>
            <Text>Welcome to HabitBuddy!</Text>
        </View>
    );
}
