import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, Linking, TouchableOpacity} from 'react-native';
import {globalStyles} from '../styles/global';
import ProfileCard from "../shared/profileCard";
import ProfileLinkingCard from "../shared/profileLinkingCard";

/*Created by Joe Pastucha/Dawson*/

/* Profile outputs the content of the Profile page */
export default function Profile({route, navigation}) {
    /*Initialization the profile page with the user information*/
    let [profilePage, setProfilePage] = useState(
        {
            name: route.params.name,
            category: route.params.category,
            goal: route.params.goal,
            hobby: route.params.hobby,
            email: route.params.email,
            number: route.params.number,
            pic: route.params.pic, key: '1'
        },
    );


    return (
        <View style={globalStyles.wholePage}>
            <View style={globalStyles.profContainer}>
                <View style={globalStyles.profilePic}>
                <Image source = {{uri: profilePage.pic}} 
                    style = {{width: 110, height: 110, position: 'absolute'}}/>
                </View>

                <View style={globalStyles.userNamePlacement}>
                    <Text style={globalStyles.userName}>{profilePage.name}</Text>
                </View>
            </View>
            <View style={globalStyles.userInfo}>
                <ProfileCard title="Category" userInfo={profilePage.category}></ProfileCard>
                <ProfileCard title="Habit Goal" userInfo={profilePage.goal}></ProfileCard>
                <ProfileCard title="Hobby" userInfo={profilePage.hobby}></ProfileCard>
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
