import React, {useState} from 'react';
import {Keyboard, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import {globalStyles} from '../styles/global';

/* Login lets you log into app and access your profile 
* Written by Kelsey Yen
*/

export default function Login({navigation, route}) {
    const {updateData} = route.params;

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
                    placeholder='Username or Email'
                    onChangeText={(val) => setUsername(val)}/>
                <TextInput
                    style={globalStyles.input}
                    placeholder='Password'
                    onChangeText={(val) => setPassword(val)}/>
                <TouchableOpacity style={globalStyles.loginButtonContainer} onPress={() => updateData()}>
                    <Text style={globalStyles.loginButtonText}>Login</Text>
                </TouchableOpacity>
                <Text style={globalStyles.loginText}>Don't have an account?</Text>
                <TouchableOpacity style={globalStyles.loginButtonContainer}
                                  onPress={() => navigation.navigate('EmptyProfile')}>
                    <Text style={globalStyles.loginButtonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
}
