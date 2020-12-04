import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useDynamicValue } from 'react-native-dynamic';
import { dynamicStyles, dyColorCodes } from '../styles/global';
import { Input } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import PasswordInput from '../shared/passwordInput';


/* emptyProfile lets you fill out your profile for the first time 
* Written by Kelsey Yen
*/

export default function SignUpProfile({ navigation }) {
    const [firstName, setFirstName] = useState('FirstName');
    const [lastName, setLastName] = useState('LastName');
    const [username, setUsername] = useState('Username');
    const [email, setEmail] = useState('Email');
    const [phoneNumber, setPhoneNumber] = useState('PhoneNumber')
    const [password, setPassword] = useState('Password');

    const dyStyles = useDynamicValue(dynamicStyles);

    //sample createUser function
    async function createUser() {
        fetch(`http://habit-buddy.herokuapp.com/user`, {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstName: 'Better',
                lastName: 'Man',
                emailAddress: 'betterman@mail.com',
                phone: '420-420-4242',
                username: 'beman',
                password: 'password',
                profileURL: 'https://www.dictionary.com/e/wp-content/uploads/2018/03/PogChamp.jpg',
                hobby: 'bettering',
                habit: 'being better everyday',
                category: 'Leisure'
            })
        })
        .then(response => response.text())
        .then(data => {
        console.log('Success:', data);
        })
        .catch((error) => {
            console.error(error);
        });
    }

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
                        autoCapitalize = 'none' />
                    <Input
                        containerStyle={{ width: '70%' }}
                        placeholderTextColor={useDynamicValue(dyColorCodes.lightText)}
                        placeholder='Email'
                        onChangeText={(val) => setEmail(val)} 
                        autoCapitalize = 'none' />
                    <Input
                        containerStyle={{ width: '70%' }}
                        placeholderTextColor={useDynamicValue(dyColorCodes.lightText)}
                        placeholder='Phone Number'
                        keyboardType='number-pad'
                        onChangeText={(val) => setEmail(val)} 
                        autoCapitalize = 'none' />
                    <PasswordInput
                        placeholder='Password'
                        placeholderTextColor={useDynamicValue(dyColorCodes.lightText)}
                        secure={true}
                        onChangeText={(val) => { setPassword(val); }}
                        autoCapitalize = 'none'
                    />
                    <PasswordInput
                        placeholder='Confirm Password'
                        placeholderTextColor={useDynamicValue(dyColorCodes.lightText)}
                        secure={true}
                        onChangeText={(val) => { setPassword(val); }}
                        autoCapitalize = 'none'
                    />
                    <TouchableOpacity style={dyStyles.loginButtonContainer} onPress={() => navigation.navigate('SignUpHabit')}>
                        <Text style={dyStyles.loginButtonText}>Next</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={dyStyles.loginButtonContainer} onPress={() => createUser()}>
                        <Text style={dyStyles.loginButtonText}>Test</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        </TouchableWithoutFeedback>
    );
}
