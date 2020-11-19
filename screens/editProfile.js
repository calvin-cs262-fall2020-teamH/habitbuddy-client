import React, {useState} from "react";

import {
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableOpacity
} from "react-native";

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import EditProfileCard from "../shared/editProfileCard";
import ProfileCard from "../shared/profileCard";

import {useDynamicValue} from 'react-native-dynamic'
import {dyColorCodes, dynamicStyles} from "../styles/global";


export default function EditProfile({ navigation }) {

    const dyStyles = useDynamicValue(dynamicStyles);

    /*Initialization the profile page with the user information*/
    let [tempProfilePage, setTempProfilePage] = useState(
        {name: 'Andrew Baker',
            category: 'Spiritual',
            goal: 'I want to attend chapel twice a week',
            email: 'email@gmail.com',
            number: 1234567890,
            pic: '../assets/images/george.jpg', key: '1'
        }
    );

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}> 
            <KeyboardAwareScrollView style={{height: '100%', backgroundColor: useDynamicValue(dyColorCodes.back)}}>
                <View style={dyStyles.wholePage}>
                    <View style={dyStyles.profContainer}>
                        <View style={dyStyles.profilePic}>
                            <Image source = {require('../assets/images/george.jpg')} 
                                style = {{width: 110, height: 110, position: 'absolute'}}/>
                        </View>
                        <View style={dyStyles.userNamePlacement}>
                            <Text style={dyStyles.userName}>{ tempProfilePage.name }</Text>
                        </View>
                    </View>
                    <View style={dyStyles.userInfo}>
                        <ProfileCard title = "Habit" userInfo = {tempProfilePage.category}></ProfileCard>
                        <EditProfileCard title = "Habit Goal" placeholder = "Enter new habit goal"></EditProfileCard>
                        <EditProfileCard title = "Hobby" placeholder = "Enter new hobby"></EditProfileCard>
                        <EditProfileCard title = "Email" placeholder = "Enter new email"></EditProfileCard>
                        <EditProfileCard title = "Phone Number" placeholder = "Enter new phone number" keyboardType='number-pad'></EditProfileCard>
                    </View>
                    <View style={dyStyles.buttonPlacement}>
                        <TouchableOpacity style={dyStyles.loginButtonContainer} 
                            onPress={() => navigation.navigate('Profile')}>
                            <Text style={dyStyles.loginButtonText}>Confirm Changes</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </TouchableWithoutFeedback>
    );
}