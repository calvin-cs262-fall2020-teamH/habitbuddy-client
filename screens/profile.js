import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {globalStyles} from '../styles/global';
import ProfileCard from "../shared/profileCard";

/*Created by Joe Pastucha*/

/* Profile outputs the content of the Profile page */
export default function Profile({navigation}) {



    /*Initialization the profile page with the user information*/
    let [profilePage, setProfilePage] = useState(
        {name: 'Andrew Baker',
            category: 'Spiritual',
            goal: 'I want to attend chapel twice a week',
            hobby: 'Reading',
            email: 'email@gmail.com',
            number: 1234567890,
            pic: '../assets/images/george.jpg', key: '1'
        }
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
                <ProfileCard title = "Category" userInfo = {profilePage.category}></ProfileCard>
                <ProfileCard title = "Habit Goal" userInfo = {profilePage.goal}></ProfileCard>
                <ProfileCard title = "Hobby" userInfo = {profilePage.hobby}></ProfileCard>
                <ProfileCard title = "Email" userInfo = {profilePage.email}></ProfileCard>
                <ProfileCard title = "Phone Number" userInfo = {profilePage.number}></ProfileCard>

            </View>
        </View>
    );
}


