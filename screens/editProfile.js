import React, {useState} from "react";
import {StyleSheet, Text, View, TextInput, Button, Image, TouchableWithoutFeedback, Keyboard} from "react-native";
import EditProfileCard from "../shared/editProfileCard";
import ProfileCard from "../shared/profileCard";

import {globalStyles} from "../styles/global";
import {MaterialIcons} from "@expo/vector-icons";

export default function EditProfile() {


    /*Initialization the profile page with the user information*/
    let [tempProfilePage, setTempProfilePage] = useState(
        {name: 'Andrew Baker', habit: 'Attending chapel', hobby: 'Reading', email: 'email@gmail.com', pic: '../assets/images/george.jpg', key: '1'}
    );

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}> 
        <View style={globalStyles.wholePage}>
            <View style={globalStyles.profContainer}>
                <View style={globalStyles.profilePic}>
                    <Image source = {require('../assets/images/george.jpg')} style = {{width: 110, height: 110, position: 'absolute'}}/>
                </View>

                <View style={globalStyles.userNamePlacement}>
                    <Text style={globalStyles.userName}>{ tempProfilePage.name }</Text>
                </View>
            </View>
            <View style={globalStyles.userInfo}>
                <ProfileCard title = "Habit" userInfo = {tempProfilePage.habit}></ProfileCard>
                <EditProfileCard title = "Hobby" placeholder = "Enter new hobby"></EditProfileCard>
                <EditProfileCard title = "Email" placeholder = "Enter new email"></EditProfileCard>
            </View>
            <Button title='Confirm changes'/>

        </View>
        </TouchableWithoutFeedback>
    );
}

