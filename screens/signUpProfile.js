import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { useDynamicValue } from 'react-native-dynamic';
import { dynamicStyles, dyColorCodes } from '../styles/global';
import { Input } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import PasswordInput from '../shared/passwordInput';


/**
 * SignUpProfile displays empty Profile inputs for first time users and create new user in database
 * @author Kelsey Yen (kny4) and Dawson Buist (Bongo9911)
 * @param {any} navigation
 * @return {Input} Text inputs for "First Name", "Last Name", "Username", "Email", "Phone Number", and "Password"
 */

export default function SignUpProfile({ navigation }) {
    const [firstName, setFirstName] = useState('FirstName');
    const [lastName, setLastName] = useState('LastName');
    const [username, setUsername] = useState('Username');
    const [email, setEmail] = useState('Email');
    const [phoneNumber, setPhoneNumber] = useState('PhoneNumber')
    const [password, setPassword] = useState('Password');
    const [passwordConfirm, setPasswordConfirm] = useState('Password');

    const dyStyles = useDynamicValue(dynamicStyles);

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log('dismissed keyboard')
        }}>
            <KeyboardAwareScrollView style={{
                height: '100%',
                backgroundColor: useDynamicValue(dyColorCodes.back)
            }}>
                <View style={dyStyles.loginContainer}>
                    <Input
                        containerStyle={{ width: '70%' }}
                        placeholder='First Name'
                        placeholderTextColor={useDynamicValue(dyColorCodes.lightText)}
                        onChangeText={(val) => setFirstName(val)} />
                    <Input
                        containerStyle={{ width: '70%' }}
                        placeholder='Last Name'
                        placeholderTextColor={useDynamicValue(dyColorCodes.lightText)}
                        onChangeText={(val) => setLastName(val)} />
                    <Input
                        containerStyle={{ width: '70%' }}
                        placeholder='Username'
                        placeholderTextColor={useDynamicValue(dyColorCodes.lightText)}
                        onChangeText={(val) => setUsername(val)}
                        autoCapitalize='none' />
                    <Input
                        containerStyle={{ width: '70%' }}
                        placeholderTextColor={useDynamicValue(dyColorCodes.lightText)}
                        placeholder='Email'
                        onChangeText={(val) => setEmail(val)}
                        autoCapitalize='none' />
                    <Input
                        containerStyle={{ width: '70%' }}
                        placeholderTextColor={useDynamicValue(dyColorCodes.lightText)}
                        placeholder='Phone Number'
                        keyboardType='number-pad'
                        onChangeText={(val) => setPhoneNumber(val)}
                        autoCapitalize='none' />
                    <PasswordInput
                        placeholder='Password'
                        placeholderTextColor={useDynamicValue(dyColorCodes.lightText)}
                        secure={true}
                        onChangeText={(val) => { setPassword(val); }}
                        autoCapitalize='none'
                    />
                    <PasswordInput
                        placeholder='Confirm Password'
                        placeholderTextColor={useDynamicValue(dyColorCodes.lightText)}
                        secure={true}
                        onChangeText={(val) => { setPasswordConfirm(val); }}
                        autoCapitalize='none'
                    />
                    <TouchableOpacity style={dyStyles.loginButtonContainer} onPress={() => {
                        // Creates an alert when the entered passwords are different.
                        if (password == passwordConfirm){ navigation.navigate('SignUpHabit', 
                        {data: {
                            firstName: firstName,
                            lastName: lastName,
                            emailAddress: email,
                            phone: phoneNumber,
                            username: username,
                            password: password,
                            profileURL: 'https://th.bing.com/th/id/OIP.K6XYBPwgLPhvWH9BxDYfXAHaEN?pid=Api&rs=1'
                        }})} 
                        else {Alert.alert('Password Issue',
                        "You have enter different passwords. Please enter the same password.",
                        [
                            { text: "Okay" }
                        ]
                    )}} }>
                        <Text style={dyStyles.loginButtonText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        </TouchableWithoutFeedback>
    );
}
