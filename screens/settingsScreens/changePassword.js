import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, Button } from 'react-native';
import { globalStyles, colorCodes } from '../../styles/global';

/* The Change Password screen allows the user to change their password*/
export default function ChangePassword() {
    
    return (
        //Dismiss keyboard if you tap off the input box or keyboard
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}> 
            <View style={globalStyles.container}>
                <Text style={globalStyles.Text}>Enter Current Password:</Text>
                <TextInput   
                    style={styles.inputBox}
                    placeholder=''
                    /*onChangeText={(val) => setChabit(val)}*//>
                
                <Text style={globalStyles.Text}>Enter New Password:</Text>
                <TextInput   
                    style={styles.inputBox}
                    placeholder=''/>

                <Text style={globalStyles.Text}>Confirm New Password:</Text>
                <TextInput   
                    style={styles.inputBox}
                    placeholder=''/>

                <Button title='Confirm'></Button>
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