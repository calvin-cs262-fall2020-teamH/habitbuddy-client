import React, { useState } from 'react';
import { Keyboard, Text, TouchableOpacity, TouchableWithoutFeedback, View, Alert } from 'react-native';
import { Input } from 'react-native-elements';
import { useDynamicValue } from 'react-native-dynamic';
import { dynamicStyles, dyColorCodes } from '../../styles/global';
// import SelectionBlock from '../../shared/blocks/selectionBlock';
import PasswordInput from '../../shared/passwordInput';
import CommonDataManager from "../../data/CommonDataManager";

//Tabbing between inputs taken from https://thekevinscott.com/tabbing-through-input-fields/
let inputs = {};

function focusNextField(id) {
    inputs[id].focus();
}

/**
 * ChangePassword allows user to change their current password 
 * @author Dawson Buist (Bongo9911) and Kelsey Yen (kny4)
 * @param {any} navigation
 * @return {Input} Text inputs for "Current Password" and "New Password"
 */
export default function ChangePassword({ navigation }) {
    // let commonData = CommonDataManager.getInstance();
    const [password, setPassword] = useState('Password');
    const [passwordConfirm, setPasswordConfirm] = useState('Password');
    const [passwordNew, setPasswordNew] = useState('Password');
    const dyStyles = useDynamicValue(dynamicStyles);

    let commonData = CommonDataManager.getInstance();

    async function updatePassword() {
        await fetch('http://habit-buddy.herokuapp.com/password/' + password + '/' + passwordNew + '/' + commonData.getUserID(), {
            method: 'PUT', headers: { 'Content-Type': 'application/json' }})
            .then(async response => await response.json())
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        //Dismiss keyboard if you tap off the input box or keyboard
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            {/* <View style={[dyStyles.wholePage, { paddingHorizontal: 20, paddingVertical: 20 }]}> */}
            <View style={dyStyles.loginContainer}>
                <Text style={[dyStyles.text, {fontWeight: 'bold', fontSize: 18, paddingVertical: 10, paddingRight: 30}]}>Enter Current Password:</Text>
                <PasswordInput
                    placeholder='Current Password'
                    placeholderTextColor={useDynamicValue(dyColorCodes.lightText)}
                    secure={true}
                    onChangeText={(val) => { setPassword(val); }}
                    autoCapitalize='none'
                    returnKeyType={'next'}
                    onSubmitEditing={() => {focusNextField('two');}} 
                    ref={input => {inputs['one'] = input;}}
                    />

                <Text style={[dyStyles.text, {fontWeight: 'bold', fontSize: 18, paddingVertical: 10, paddingRight: 60}]}>Enter New Password:</Text>
                <PasswordInput
                    placeholder='New Password'
                    placeholderTextColor={useDynamicValue(dyColorCodes.lightText)}
                    secure={true}
                    onChangeText={(val) => { setPasswordNew(val); }}
                    autoCapitalize='none'
                    returnKeyType={'next'}
                    onSubmitEditing={() => {focusNextField('three');}} 
                    ref={input => {inputs['two'] = input;}}
                    />

                <Text style={[dyStyles.text, {fontWeight: 'bold', fontSize: 18, paddingVertical: 10, paddingRight: 37}]}>Confirm New Password:</Text>
                <PasswordInput
                    placeholder='New Password'
                    placeholderTextColor={useDynamicValue(dyColorCodes.lightText)}
                    secure={true}
                    onChangeText={(val) => { setPasswordConfirm(val); }}
                    autoCapitalize='none'
                    returnKeyType={'done'}
                    ref={input => {inputs['three'] = input;}} />
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity style={dyStyles.loginButtonContainer}
                        onPress={() => {
                            if (passwordNew == passwordConfirm){
                                updatePassword();
                                navigation.navigate('Settings')
                            } 
                            else {Alert.alert('Password Issue',
                            "You have enter different passwords. Please enter the same password.",
                            [ { text: "Okay" } ]
                    )}} }>
                        <Text style={dyStyles.loginButtonText}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};