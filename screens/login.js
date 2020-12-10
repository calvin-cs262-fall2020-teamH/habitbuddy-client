import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, StyleSheet, ImageBackground } from 'react-native';
import { useDynamicValue } from 'react-native-dynamic';
import { Input } from 'react-native-elements';
import { dynamicStyles, dyColorCodes } from '../styles/global';
import CommonDataManager from '../data/CommonDataManager';
import PasswordInput from '../shared/passwordInput';

/*Login lets you log into app and access your profile 
* Written by Kelsey Yen
*/
const background = { uri: "https://cdn.pixabay.com/photo/2017/11/18/22/09/christmas-2961385_1280.jpg" };

export default function Login({ navigation }) {

    const [username, setUsername] = useState('Username');
    const [password, setPassword] = useState('Password');
    const [Loading, setLoading] = React.useState(false);

    const dyStyles = useDynamicValue(dynamicStyles);

    let commonData = CommonDataManager.getInstance();
    // commonData.setUserID("7");

    function testLogin() {
        // commonData.setUserID("7");
        fetch('https://habit-buddy.herokuapp.com/login/' + username + '/' + password)                                           // Web service will be entered once we have it fully available.
            .then((response) => response.text())
            .then((responseText) => {
                if (responseText[0] !== 'N') {
                    commonData.setUserID(JSON.parse(responseText).id);
                }
                else {

                }
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));

        //console.log(commonData.getUserID());
    }

    useEffect(() => {
        if (commonData.getUserID()) {
            commonData.updateUser({});
        }
    }, [])


    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log('dismissed keyboard')
        }}>
            <View style={{ flex: 1 }}>
            <ImageBackground source={background} style={styles.image} blurRadius={2.0}>
                    <View style={dyStyles.loginContainer}>
                        <Input
                            containerStyle={{ width: '70%' }}
                            placeholder='Username'
                            placeholderTextColor={useDynamicValue(dyColorCodes.lightText)}
                            onChangeText={(val) => setUsername(val)}
                            autoCapitalize='none'
                        />
                        <PasswordInput
                            placeholder='Password'
                            placeholderTextColor={useDynamicValue(dyColorCodes.lightText)}
                            secure={true}
                            onChangeText={(val) => { setPassword(val); }}
                            autoCapitalize='none'
                        />
                        <TouchableOpacity style={dyStyles.loginButtonContainer} onPress={() => testLogin()}>
                            <Text style={dyStyles.loginButtonText}>Login</Text>
                        </TouchableOpacity>
                        <Text style={dyStyles.loginText}>Don't have an account?</Text>
                        <TouchableOpacity style={dyStyles.loginButtonContainer}
                            onPress={() => navigation.navigate('SignUpProfile')}>
                            <Text style={dyStyles.loginButtonText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        // resizeMode: 'cover',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    }
})