import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

/* Login lets you log into app and access your profile 
* Written by Kelsey Yen
*/

export default function Login({ navigation }) {
    const [username, setUsername] = useState('Username');
    const [password, setPassword] = useState('Password');

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log('dismissed keyboard')
        }}>
            <View style={globalStyles.loginContainer}>
                <Text style={globalStyles.loginText}>Welcome to Habitbuddy!</Text>
                <TextInput
                    style={globalStyles.input}
                    placeholder='username or email'
                    onChangeText={(val) => setUsername(val)} />
                <TextInput
                    style={globalStyles.input}
                    placeholder='password'
                    onChangeText={(val) => setPassword(val)} />
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Card>
                        <Text style={globalStyles.button}>login</Text>
                    </Card>
                </TouchableOpacity>
                <Text style={globalStyles.loginText}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('EmptyProfile')}>
                    <Card>
                        <Text style={globalStyles.button}>sign up</Text>
                    </Card>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
}