import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';

/* emptyProfile lets you fill out your profile for the first time 
* Written by Kelsey Yen
*/

export default function EmptyProfile({ navigation }) {
    const [FirstName, setFirstName] = useState('FirstName');
    const [lastName, setLastName] = useState('LastName');
    const [username, setUsername] = useState('Username');
    const [email, setEmail] = useState('Email');
    const [password, setPassword] = useState('Password');

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log('dismissed keyboard')
        }}>
            <View style={globalStyles.loginContainer}>
                <Text style={globalStyles.loginText}>Account Information</Text>
                <TextInput
                    style={globalStyles.input}
                    placeholder='First Name'
                    onChangeText={(val) => setFirstName(val)} />
                <TextInput
                    style={globalStyles.input}
                    placeholder='Last Name'
                    onChangeText={(val) => setLastName(val)} />    
                <TextInput
                    style={globalStyles.input}
                    placeholder='Username'
                    onChangeText={(val) => setUsername(val)} />
                <TextInput
                    style={globalStyles.input}
                    placeholder='Email'
                    onChangeText={(val) => setEmail(val)} />
                <TextInput
                    style={globalStyles.input}
                    placeholder='Password'
                    onChangeText={(val) => setPassword(val)} />
                <TouchableOpacity style={globalStyles.loginButtonContainer} onPress={() => navigation.navigate('EmptyHabits')}>
                        <Text style={globalStyles.loginButtonText}>Next</Text>
                </TouchableOpacity>    
            </View>
        </TouchableWithoutFeedback>
    );
}
