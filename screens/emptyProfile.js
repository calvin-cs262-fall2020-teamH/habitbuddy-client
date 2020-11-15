import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useDynamicValue } from 'react-native-dynamic';
import { dynamicStyles, dyColorCodes } from '../styles/global';
import { Input } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

/* emptyProfile lets you fill out your profile for the first time 
* Written by Kelsey Yen
*/

export default function EmptyProfile({navigation}) {
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
                        style={dyStyles.input}
                        placeholderTextColor = { useDynamicValue(dyColorCodes.lightText) }
                        placeholder='First Name'
                        onChangeText={(val) => setFirstName(val)} />
                    <Input
                        containerStyle={{width: '75%'}}
                        style={dyStyles.input}
                        placeholderTextColor = { useDynamicValue(dyColorCodes.lightText) }
                        placeholder='Last Name'
                        onChangeText={(val) => setLastName(val)} />    
                    <Input
                        containerStyle={{width: '75%'}}
                        style={dyStyles.input}
                        placeholderTextColor = { useDynamicValue(dyColorCodes.lightText) }
                        placeholder='Username'
                        onChangeText={(val) => setUsername(val)} />
                    <Input
                        containerStyle={{width: '75%'}}
                        style={dyStyles.input}
                        placeholderTextColor = { useDynamicValue(dyColorCodes.lightText) }
                        placeholder='Email'
                        onChangeText={(val) => setEmail(val)} />
                    <Input
                        containerStyle={{width: '75%'}}
                        style={dyStyles.input}
                        placeholderTextColor = { useDynamicValue(dyColorCodes.lightText) }
                        secureTextEntry={true}
                        rightIcon={
                            <MaterialIcons name='remove-red-eye' size={27} color='#333' style={dyStyles.leftIcon}
                            onPress={() => setPasswordText(password)}/>}
                        placeholder='Password'
                        onChangeText={(val) => setPassword(val)} />
                    <Input
                        containerStyle={{width: '75%'}}
                        style={dyStyles.input}
                        placeholderTextColor = { useDynamicValue(dyColorCodes.lightText) }
                        secureTextEntry={true}
                        rightIcon={
                            <MaterialIcons name='remove-red-eye' size={27} color='#333' style={dyStyles.leftIcon}
                            onPress={(val) => setPasswordText(val)} />}
                        placeholder='Confirm Password'
                        onChangeText={(val) => setConfirmPassword(val)} />
                    <TouchableOpacity style={dyStyles.loginButtonContainer} onPress={() => navigation.navigate('EmptyHabits')}>
                        <Text style={dyStyles.loginButtonText}>Next</Text>
                    </TouchableOpacity>  
                </View>  
            </KeyboardAwareScrollView>
        </TouchableWithoutFeedback>
    );
}
