import React from 'react';
import {Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
//import { Input } from 'react-native-elements';
import {globalStyles} from '../../styles/global';

//Tabbing between inputs taken from https://thekevinscott.com/tabbing-through-input-fields/
let inputs = {};

function focusNextField(id) {
    inputs[id].focus();
}

/* The Change Password screen allows the user to change their password*/
export default function ChangePassword({ navigation }) {

    return (
        //Dismiss keyboard if you tap off the input box or keyboard
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}> 
            <View style={globalStyles.container}>
                <Text style={globalStyles.Text}>Enter Current Password:</Text>
                <TextInput   
                    style={styles.inputBox}
                    placeholder=''
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
                
                <Text style={globalStyles.Text}>Enter New Password:</Text>
                <TextInput   
                    style={styles.inputBox}
                    placeholder=''
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

                <Text style={globalStyles.Text}>Confirm New Password:</Text>
                <TextInput   
                    style={styles.inputBox}
                    placeholder=''
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
                <TouchableOpacity style={globalStyles.loginButtonContainer}
                    onPress={() => navigation.navigate('Account')}>
                    <Text style={globalStyles.loginButtonText}>Confirm</Text>   
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