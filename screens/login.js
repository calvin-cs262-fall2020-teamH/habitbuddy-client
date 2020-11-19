import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useDynamicValue } from 'react-native-dynamic';
import { Input } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import { dynamicStyles, dyColorCodes } from '../styles/global';
import CommonDataManager from '../data/CommonDataManager';

/* Login lets you log into app and access your profile 
* Written by Kelsey Yen
*/

export default function Login({ navigation, route }) {   
    const {updateData} = route.params;

    const [username, setUsername] = useState('Username');
    const [password, setPassword] = useState('Password');   
    const [showPassword, setShowPassword] = useState(true);
    //const [isLoading, setLoading] = useState(true);

    const dyStyles = useDynamicValue(dynamicStyles);

    let commonData = CommonDataManager.getInstance();
    //commonData.setUserID("User1");

    function testLogin() {
        fetch('https://habit-buddy.herokuapp.com/login/' + username + '/' + password)                                           // Web service will be entered once we have it fully available.
            .then((response) => response.text())
            .then((responseText) => {
                if(responseText[0] !== 'N') {
                    commonData.setUserID(JSON.parse(responseText).id);
                    updateData({});
                }
                else {
                    
                }
            })
            .catch((error) => console.error(error))
            //.finally(() => setLoading(false));

        //console.log(commonData.getUserID());
    }

    useEffect(()=>{
        if(commonData.getUserID()) {
            updateData({});
        }
    }, [])
    

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
                        autoCapitalize = 'none'
                        />
                    <Input
                        containerStyle={{width: '75%'}}
                        style={dyStyles.input}
                        placeholderTextColor = { useDynamicValue(dyColorCodes.lightText) }
                        secureTextEntry={showPassword}
                        placeholder='Password'
                        onChangeText={(val) => setPassword(val)}
                        autoCapitalize = 'none'
                        rightIcon={
                            <MaterialIcons name='remove-red-eye' size={27} color='#333' style={dyStyles.passwordIcon}
                            onPress={() => setShowPassword(!showPassword) }/>}
                        />
                    {/* </View> */}
                <TouchableOpacity style={dyStyles.loginButtonContainer} onPress={() => testLogin()}>
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

