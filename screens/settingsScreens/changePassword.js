import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
//import { Input } from 'react-native-elements';
import { useDynamicValue } from 'react-native-dynamic';
import { dynamicStyles, dyColorCodes } from '../../styles/global';

//Tabbing between inputs taken from https://thekevinscott.com/tabbing-through-input-fields/
let inputs = {};

function focusNextField(id) {
    inputs[id].focus();
}

/* The Change Password screen allows the user to change their password*/
export default function ChangePassword({ navigation }) {

    const dyStyles = useDynamicValue(dynamicStyles);

    return (
        //Dismiss keyboard if you tap off the input box or keyboard
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}> 
            <View style={dyStyles.container}>
                <Text style={dyStyles.text}>Enter Current Password:</Text>
                <TextInput   
                    style={dyStyles.input}
                    placeholderTextColor = { useDynamicValue(dyColorCodes.lightText) }
                    placeholder='Current Password'
                    secureTextEntry={true}
                    onSubmitEditing={() => {
                        focusNextField('two');
                    }}
                    returnKeyType={ "next" }
                    onChangeText={(val) => {}}
                    ref={ input => {
                        inputs['one'] = input;
                      }}
                />
                
                <Text style={dyStyles.text}>Enter New Password:</Text>
                <TextInput   
                    style={dyStyles.input}
                    placeholderTextColor = { useDynamicValue(dyColorCodes.lightText) }
                    placeholder='New Password'
                    secureTextEntry={true}
                    onSubmitEditing={() => {
                        focusNextField('three');
                    }}
                    returnKeyType={ "next" }
                    onChangeText={(val) => {}}
                    ref={ input => {
                        inputs['two'] = input;
                    }}
                />

                <Text style={dyStyles.text}>Confirm New Password:</Text>
                <TextInput   
                    style={dyStyles.input}
                    placeholderTextColor = { useDynamicValue(dyColorCodes.lightText) }
                    placeholder='Confirm Password'
                    secureTextEntry={true}
                    onSubmitEditing={() => {
                        //Equivalent to Confirm button
                    }}
                    returnKeyType={ "done" }
                    onChangeText={(val) => {}}
                    ref={ input => {
                        inputs['three'] = input;
                    }}
                />
                <View style={{alignItems: 'center', justifyContent: 'center'}}> 
                <TouchableOpacity style={dyStyles.loginButtonContainer}
                    onPress={() => navigation.navigate('Account')}>
                    <Text style={dyStyles.loginButtonText}>Confirm</Text>   
                </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    inputBox: {
        borderWidth: 2,
        borderColor: '#6fcefd',
        width:'100%',
        height: 30,
        marginVertical:10,
    },
});