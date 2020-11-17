import React, { useState } from 'react';
import { View, Text, Image, Linking, TouchableOpacity} from 'react-native';
import { useDynamicValue } from 'react-native-dynamic';
import { dynamicStyles } from '../styles/global';
import ProfileCard from "../shared/profileCard";
import ProfileLinkingCard from "../shared/profileLinkingCard";

/*Created by Joe Pastucha/Dawson*/

/* Profile outputs the content of the Profile page */
export default function Profile({route, navigation}) {
    /*Initialization the profile page with the user information*/
<<<<<<< HEAD
    let [profilePage, setProfilePage] = useState(                               //THIS WILL NOT WORK UNTIL THE BACKEND IS UP AND RUNNING.
        {name: route.params.firstName + route.params.lastName,
=======
    let [profilePage, setProfilePage] = useState(
        {
            name: route.params.name,
>>>>>>> master
            category: route.params.category,
            goal: route.params.habitGoal,
            hobby: route.params.hobby,
            email: route.params.email,
<<<<<<< HEAD
            number: route.params.phone,
            pic: route.params.profileURL, 
            key: '1'},
=======
            number: route.params.number,
            pic: route.params.pic, key: '1'
        },
>>>>>>> master
    );

    const dyStyles = useDynamicValue(dynamicStyles);

    return (
<<<<<<< HEAD
        <View style={globalStyles.wholePage}>
            <View style={globalStyles.profContainer}>
                <View style={globalStyles.profilePic}>
                    <Image source = {{uri: profilePage.pic}} style = {{width: 110, height: 110, position: 'absolute'}}/>
=======
        <View style={dyStyles.wholePage}>
            <View style={dyStyles.profContainer}>
                <View style={dyStyles.profilePic}>
                <Image source = {{uri: profilePage.pic}} 
                    style = {{width: 110, height: 110, position: 'absolute'}}/>
>>>>>>> master
                </View>

                <View style={dyStyles.userNamePlacement}>
                    <Text style={dyStyles.userName}>{ profilePage.name }</Text>
                </View>
            </View>
            <View style={dyStyles.userInfo}>
                <ProfileCard title = "Category" userInfo = {profilePage.category}></ProfileCard>
                <ProfileCard title = "Habit Goal" userInfo = {profilePage.goal}></ProfileCard>
                <ProfileCard title = "Hobby" userInfo = {profilePage.hobby}></ProfileCard>
                
                <TouchableOpacity onPress={() => Linking.openURL('mailto:' + profilePage.email)}>
                    <ProfileLinkingCard title="Email" userInfo={profilePage.email}></ProfileLinkingCard>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Linking.openURL('sms:' + profilePage.number)}>
                    <ProfileLinkingCard title="Phone Number" userInfo={profilePage.number}></ProfileLinkingCard>
                </TouchableOpacity>
            </View>
        </View>
    );
}
