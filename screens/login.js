import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useDynamicValue } from 'react-native-dynamic';
import { dynamicStyles, dyColorCodes } from '../styles/global';

/* Login lets you log into app and access your profile 
* Written by Kelsey Yen
*/

export default function Login({ navigation, route }) {
    const {updateData} = route.params;

    const [username, setUsername] = useState('Username');
    const [password, setPassword] = useState('Password');

    const dyStyles = useDynamicValue(dynamicStyles);

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log('dismissed keyboard')
        }}>
            <View style={dyStyles.loginContainer}>
                <Text style={dyStyles.loginText}>Welcome to Habitbuddy!</Text>
                <TextInput
                    style={dyStyles.input}
                    placeholder='Username or Email'
                    placeholderTextColor = { useDynamicValue(dyColorCodes.lightText) }
                    onChangeText={(val) => setUsername(val)} />
                <TextInput
                    style={dyStyles.input}
                    placeholderTextColor = { useDynamicValue(dyColorCodes.lightText) }
                    placeholder='Password'
                    secureTextEntry={true}
                    onChangeText={(val) => setPassword(val)} />
                <TouchableOpacity style={dyStyles.loginButtonContainer} onPress={() => updateData()}>
                    <Text style={dyStyles.loginButtonText}>Login</Text>   
                </TouchableOpacity>
                <Text style={dyStyles.loginText}>Don't have an account?</Text>
                <TouchableOpacity style={dyStyles.loginButtonContainer} onPress={() => navigation.navigate('EmptyProfile')}>
                    <Text style={dyStyles.loginButtonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
}
