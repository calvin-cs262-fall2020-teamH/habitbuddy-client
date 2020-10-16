import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

/* emptyHabits lets you choose your habits for the first time 
* Written by Kelsey Yen
*/

export default function EmptyHabits({ navigation }) {
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log('dismissed keyboard')
        }}>
            <View style={globalStyles.container}>
                <TouchableOpacity style={globalStyles.loginButtonContainer} onPress={() => navigation.navigate('Home')}>
                    <Text style={globalStyles.loginButtonText}>Finish</Text>
                </TouchableOpacity>    
            </View>
        </TouchableWithoutFeedback>
    );
}