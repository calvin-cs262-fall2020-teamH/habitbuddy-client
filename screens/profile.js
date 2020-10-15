import React, { useState } from 'react';

import {StyleSheet, View, Text, FlatList, TextInput, Image} from 'react-native';
import { globalStyles } from '../styles/global';
import ProfileCard from "../shared/profileCard";
import { MaterialIcons } from '@expo/vector-icons';
import {NavigationContainer} from "@react-navigation/native";
import Navigator from "../routes/drawer";
import SettingsBlock from "../shared/settingsBlock";
import Card from "../shared/card";

/*Created by Joe Pastucha*/

/* Profile outputs the content of the Profile page */
export default function Profile({navigation}) {



    /*Initialization the profile page with the user information*/
    let [profilePage, setProfilePage] = useState(
        {name: 'Andrew Baker', habit: 'Attending chapel', hobby: 'Reading', email: 'email@gmail.com', pic: '../assets/images/george.jpg', key: '1'},
    );



    return (
        <View style={globalStyles.wholePage}>
            <View style={globalStyles.profContainer}>
                <View style={globalStyles.profilePic}>
                    <Image source = {require('../assets/images/george.jpg')} style = {{width: 110, height: 110, position: 'absolute'}}/>
                </View>

                <View style={globalStyles.userNamePlacement}>
                    <Text style={globalStyles.userName}>{ profilePage.name }</Text>
                </View>
            </View>
            <View style={globalStyles.userInfo}>
                <ProfileCard title = "Habit" userInfo = {profilePage.habit}></ProfileCard>
                <ProfileCard title = "Hobby" userInfo = {profilePage.hobby}></ProfileCard>
                <ProfileCard title = "Email" userInfo = {profilePage.email}></ProfileCard>



            </View>
        </View>
    );
}


