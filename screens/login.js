import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useDynamicValue } from 'react-native-dynamic';
import { Input } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import { dynamicStyles, dyColorCodes } from '../styles/global';

/* Login lets you log into app and access your profile 
* Written by Kelsey Yen
*/

export default function Login({ navigation, route }) {   
    const {updateData} = route.params;

    const [username, setUsername] = useState('Username');
    const [password, setPassword] = useState('Password');   
    // const [showPassword, setShowPassword] = password;

    const dyStyles = useDynamicValue(dynamicStyles);

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log('dismissed keyboard')
        }}>
            <View style={dyStyles.loginContainer}>
                {/* <Text style={globalStyles.loginText}>Welcome to HabitBuddy!</Text> */}
                    <Input
                        containerStyle={{width: '75%'}}
                        style={dyStyles.input}
                        placeholderTextColor = { useDynamicValue(dyColorCodes.lightText) }
                        placeholder='Username or Email'
                        onChangeText={(val) => setUsername(val)}
                        />
                    <Input
                        containerStyle={{width: '75%'}}
                        style={dyStyles.input}
                        placeholderTextColor = { useDynamicValue(dyColorCodes.lightText) }
                        secureTextEntry={true}
                        placeholder='Password'
                        onChangeText={(val) => setPassword(val)} 
                        rightIcon={
                            <MaterialIcons name='remove-red-eye' size={27} color='#333' style={dyStyles.passwordIcon}
                            onPress={() => this.setState( {hidden: !this.state.hidden}) }/>}
                        />
                    {/* </View> */}
                <TouchableOpacity style={dyStyles.loginButtonContainer} onPress={() => updateData()}>
                    <Text style={dyStyles.loginButtonText}>Login</Text>
                </TouchableOpacity>
                <Text style={dyStyles.loginText}>Don't have an account?</Text>
                <TouchableOpacity style={dyStyles.loginButtonContainer}
                                  onPress={() => navigation.navigate('EmptyProfile')}>
                    <Text style={dyStyles.loginButtonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
}

