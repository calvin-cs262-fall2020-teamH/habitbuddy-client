import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Input } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { globalStyles } from '../styles/global';

/* emptyProfile lets you fill out your profile for the first time 
* Written by Kelsey Yen
*/

export default function EmptyProfile({ navigation }) {
    const [firstName, setFirstName] = useState('FirstName');
    const [lastName, setLastName] = useState('LastName');
    const [username, setUsername] = useState('Username');
    const [email, setEmail] = useState('Email');
    const [password, setPassword] = useState('Password');
    const [passwordText, setPasswordText] = useState('PasswordText');
    const [confirmPassword, setConfirmPassword] = useState('ConfirmPassword');

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log('dismissed keyboard')
        }}>
            <KeyboardAwareScrollView>
                <View style={globalStyles.loginContainer}>
                    <Text style={globalStyles.loginText}> </Text>
                    <Input
                        containerStyle={{width: '75%'}}
                        style={globalStyles.input}
                        placeholder='First Name'
                        onChangeText={(val) => setFirstName(val)} />
                    <Input
                        containerStyle={{width: '75%'}}
                        style={globalStyles.input}
                        placeholder='Last Name'
                        onChangeText={(val) => setLastName(val)} />    
                    <Input
                        containerStyle={{width: '75%'}}
                        style={globalStyles.input}
                        placeholder='Username'
                        onChangeText={(val) => setUsername(val)} />
                    <Input
                        containerStyle={{width: '75%'}}
                        style={globalStyles.input}
                        placeholder='Email'
                        onChangeText={(val) => setEmail(val)} />
                    <Input
                        containerStyle={{width: '75%'}}
                        style={globalStyles.input}
                        secureTextEntry={true}
                        rightIcon={
                            <MaterialIcons name='remove-red-eye' size={27} color='#333' style={globalStyles.leftIcon}
                            onPress={() => setPasswordText(password)}/>}
                        placeholder='Password'
                        onChangeText={(val) => setPassword(val)} />
                    <Input
                        containerStyle={{width: '75%'}}
                        style={globalStyles.input}
                        secureTextEntry={true}
                        rightIcon={
                            <MaterialIcons name='remove-red-eye' size={27} color='#333' style={globalStyles.leftIcon}
                            onPress={(val) => setPasswordText(val)} />}
                        placeholder='Confirm Password'
                        onChangeText={(val) => setConfirmPassword(val)} />
                    <TouchableOpacity style={globalStyles.loginButtonContainer} onPress={() => navigation.navigate('EmptyHabits')}>
                        <Text style={globalStyles.loginButtonText}>Next</Text>
                    </TouchableOpacity>  
                </View>  
            </KeyboardAwareScrollView>
        </TouchableWithoutFeedback>
    );
}
