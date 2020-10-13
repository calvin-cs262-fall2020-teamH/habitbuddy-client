import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

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
                <Text style={globalStyles.loginText}>Login Information</Text>
                <TextInput
                    style={globalStyles.input}
                    placeholder='first name'
                    onChangeText={(val) => setFirstName(val)} />
                <TextInput
                    style={globalStyles.input}
                    placeholder='last name'
                    onChangeText={(val) => setLastName(val)} />    
                <TextInput
                    style={globalStyles.input}
                    placeholder='username'
                    onChangeText={(val) => setUsername(val)} />
                <TextInput
                    style={globalStyles.input}
                    placeholder='email'
                    onChangeText={(val) => setEmail(val)} />
                <TextInput
                    style={globalStyles.input}
                    placeholder='password'
                    onChangeText={(val) => setPassword(val)} />
                <TouchableOpacity onPress={() => navigation.navigate('EmptyHabits')}>
                    <Card>
                        <Text style={globalStyles.button}>next</Text>
                    </Card>
                </TouchableOpacity>    
            </View>
        </TouchableWithoutFeedback>
    );
}