import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Input } from 'react-native-elements';
import { globalStyles } from '../styles/global';

/* Login lets you log into app and access your profile 
* Written by Kelsey Yen
*/

export default function Login({ navigation, route }) {
    const {updateData} = route.params;

    const [username, setUsername] = useState('Username');
    const [password, setPassword] = useState('Password');

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log('dismissed keyboard')
        }}>
            <View style={globalStyles.loginContainer}>
                <Text style={globalStyles.loginText}>Welcome to HabitBuddy!</Text>
                    <Input
                        containerStyle={{width: '75%'}}
                        style={globalStyles.input}
                        placeholder='Username or Email'
                        onChangeText={(val) => setUsername(val)}
                        />
                    <Input
                        containerStyle={{width: '75%'}}
                        style={globalStyles.input}
                        //rightIcon={}
                        secureTextEntry={true}
                        placeholder='Password'
                        onChangeText={(val) => setPassword(val)} />
                <TouchableOpacity style={globalStyles.loginButtonContainer} onPress={() => updateData()}>
                    <Text style={globalStyles.loginButtonText}>Login</Text>   
                </TouchableOpacity>
                <Text style={globalStyles.loginText}>Don't have an account?</Text>
                <TouchableOpacity style={globalStyles.loginButtonContainer} onPress={() => navigation.navigate('EmptyProfile')}>
                    <Text style={globalStyles.loginButtonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
}
