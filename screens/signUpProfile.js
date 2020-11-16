import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useDynamicValue } from 'react-native-dynamic';
import { dynamicStyles, dyColorCodes } from '../styles/global';
import { Input } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

/* emptyProfile lets you fill out your profile for the first time 
* Written by Kelsey Yen
*/

export default function SignUpProfile({navigation}) {
    const [firstName, setFirstName] = useState('FirstName');
    const [lastName, setLastName] = useState('LastName');
    const [username, setUsername] = useState('Username');
    const [email, setEmail] = useState('Email');
    const [password, setPassword] = useState('Password');
    
    const dyStyles = useDynamicValue(dynamicStyles);

    const [passwordText, setPasswordText] = useState('PasswordText');
    const [confirmPassword, setConfirmPassword] = useState('ConfirmPassword');

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log('dismissed keyboard')
        }}
        >
            <KeyboardAwareScrollView style={{height: '100%', 
                backgroundColor: useDynamicValue(dyColorCodes.back)}}>
                <View style={dyStyles.loginContainer}>
                    <Input
                        containerStyle={{width: '75%'}}
                        placeholder='First Name'
                        placeholderTextColor = { useDynamicValue(dyColorCodes.lightText) }
                        onChangeText={(val) => setFirstName(val)} />
                    <Input
                        containerStyle={{width: '75%'}}
                        placeholder='Last Name'
                        placeholderTextColor = { useDynamicValue(dyColorCodes.lightText) }
                        onChangeText={(val) => setLastName(val)} />    
                    <Input
                        containerStyle={{width: '75%'}}
                        placeholder='Username'
                        placeholderTextColor = { useDynamicValue(dyColorCodes.lightText) }
                        onChangeText={(val) => setUsername(val)} />
                    <Input
                        containerStyle={{width: '75%'}}
                        placeholderTextColor = { useDynamicValue(dyColorCodes.lightText) }
                        placeholder='Email'
                        onChangeText={(val) => setEmail(val)} />
                    <Input
                        containerStyle={{width: '75%'}}
                        placeholder='Password'
                        placeholderTextColor = { useDynamicValue(dyColorCodes.lightText) }
                        secureTextEntry={true}
                        rightIcon={
                            <MaterialCommunityIcons name='eye' size={25} color='#333' style={dyStyles.passwordIcon}
                            onPress={() => setPasswordText(password)}/>}
                        onChangeText={(val) => setPassword(val)} />
                    <Input
                        containerStyle={{width: '75%'}}
                        placeholder='Confirm Password'
                        placeholderTextColor = { useDynamicValue(dyColorCodes.lightText) }
                        secureTextEntry={true}
                        rightIcon={
                            <MaterialCommunityIcons name='eye' size={25} color='#333' style={dyStyles.passwordIcon}
                            onPress={() => setPasswordText(password)}/>}
                        errorMessage='Passwords do not match'
                        onChangeText={(val) => setConfirmPassword(val)} />
                    <TouchableOpacity style={dyStyles.loginButtonContainer} onPress={() => navigation.navigate('SignUpHabit')}>
                        <Text style={dyStyles.loginButtonText}>Next</Text>
                    </TouchableOpacity>  
                </View>  
            </KeyboardAwareScrollView>
        </TouchableWithoutFeedback>
    );
}
