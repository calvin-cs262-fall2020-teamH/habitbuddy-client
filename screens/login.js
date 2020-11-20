import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useDynamicValue } from 'react-native-dynamic';
import { Input } from 'react-native-elements';
import { dynamicStyles, dyColorCodes } from '../styles/global';
import PasswordInput from '../shared/passwordInput';

/*Login lets you log into app and access your profile 
* Written by Kelsey Yen
*/

export default function Login({ navigation, route }) {
    const { updateData } = route.params;

    const [username, setUsername] = useState('Username');
    const [password, setPassword] = useState('Password');

    const dyStyles = useDynamicValue(dynamicStyles);

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log('dismissed keyboard')
        }}>
            <View style={dyStyles.loginContainer}>
                <Input
                    containerStyle={{ width: '70%' }}
                    placeholder='Username'
                    placeholderTextColor={useDynamicValue(dyColorCodes.lightText)}
                    onChangeText={(val) => setUsername(val)}
                />
                <PasswordInput
                    placeholder='Password'
                    placeholderTextColor={useDynamicValue(dyColorCodes.lightText)}
                    secure={true}
                    onChangeText={(val) => { setPassword(val); }}
                />
                <TouchableOpacity style={dyStyles.loginButtonContainer} onPress={() => updateData()}>
                    <Text style={dyStyles.loginButtonText}>Login</Text>
                </TouchableOpacity>
                <Text style={dyStyles.loginText}>Don't have an account?</Text>
                <TouchableOpacity style={dyStyles.loginButtonContainer}
                    onPress={() => navigation.navigate('SignUpProfile')}>
                    <Text style={dyStyles.loginButtonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
}

