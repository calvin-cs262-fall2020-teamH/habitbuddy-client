import React from 'react';
import {Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import { Input } from 'react-native-elements';
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
            <View style={[dyStyles.wholePage, {paddingHorizontal: 20, paddingVertical: 20}]}>
                <Text style={dyStyles.titleText}>Enter Current Password:</Text>
                <Input   
                    style={dyStyles.input}
                    placeholderTextColor = { useDynamicValue(dyColorCodes.lightText) }
                    placeholder='Current Password'
                    secureTextEntry={true}
                    onSubmitEditing={() => {
                        focusNextField('two');
                    }}
                    returnKeyType={ "next" }
                    onChangeText={(val) => {}}
                    autoCapitalize = 'none'
                    ref={ input => {
                        inputs['one'] = input;
                      }}
                />
                
                <Text style={dyStyles.titleText}>Enter New Password:</Text>
                <Input   
                    style={dyStyles.input}
                    placeholderTextColor = { useDynamicValue(dyColorCodes.lightText) }
                    placeholder='New Password'
                    secureTextEntry={true}
                    onSubmitEditing={() => {
                        focusNextField('three');
                    }}
                    returnKeyType={ "next" }
                    onChangeText={(val) => {}}
                    autoCapitalize = 'none'
                    ref={ input => {
                        inputs['two'] = input;
                    }}
                />

                <Text style={dyStyles.titleText}>Confirm New Password:</Text>
                <Input   
                    style={dyStyles.input}
                    placeholderTextColor = { useDynamicValue(dyColorCodes.lightText) }
                    placeholder='Confirm Password'
                    secureTextEntry={true}
                    onSubmitEditing={() => {
                        //Equivalent to Confirm button
                    }}
                    returnKeyType={ "done" }
                    onChangeText={(val) => {}}
                    autoCapitalize = 'none'
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