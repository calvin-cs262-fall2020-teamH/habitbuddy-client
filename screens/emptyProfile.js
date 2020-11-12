import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useDynamicValue } from 'react-native-dynamic';
import { dynamicStyles, dyColorCodes } from '../styles/global';

/* emptyProfile lets you fill out your profile for the first time 
* Written by Kelsey Yen
*/

export default function EmptyProfile({ navigation }) {
    const [firstName, setFirstName] = useState('FirstName');
    const [lastName, setLastName] = useState('LastName');
    const [username, setUsername] = useState('Username');
    const [email, setEmail] = useState('Email');
    const [password, setPassword] = useState('Password');
    
    const dyStyles = useDynamicValue(dynamicStyles);

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log('dismissed keyboard')
        }}>
            <View style={dyStyles.loginContainer}>
                <Text style={dyStyles.loginText}>Account Information</Text>
                <TextInput
                    style={dyStyles.input}
                    placeholderTextColor = { useDynamicValue(dyColorCodes.lightText) }
                    placeholder='First Name'
                    onChangeText={(val) => setFirstName(val)} />
                <TextInput
                    style={dyStyles.input}
                    placeholderTextColor = { useDynamicValue(dyColorCodes.lightText) }
                    placeholder='Last Name'
                    onChangeText={(val) => setLastName(val)} />    
                <TextInput
                    style={dyStyles.input}
                    placeholderTextColor = { useDynamicValue(dyColorCodes.lightText) }
                    placeholder='Username'
                    onChangeText={(val) => setUsername(val)} />
                <TextInput
                    style={dyStyles.input}
                    placeholderTextColor = { useDynamicValue(dyColorCodes.lightText) }
                    placeholder='Email'
                    onChangeText={(val) => setEmail(val)} />
                <TextInput
                    style={dyStyles.input}
                    placeholderTextColor = { useDynamicValue(dyColorCodes.lightText) }
                    placeholder='Password'
                    secureTextEntry={true}
                    onChangeText={(val) => setPassword(val)} />
                <TouchableOpacity style={dyStyles.loginButtonContainer} onPress={() => navigation.navigate('EmptyHabits')}>
                        <Text style={dyStyles.loginButtonText}>Next</Text>
                </TouchableOpacity>    
            </View>
        </TouchableWithoutFeedback>
    );
}
