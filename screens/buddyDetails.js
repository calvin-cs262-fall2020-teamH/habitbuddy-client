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


    const dyStyles = useDynamicValue(dynamicStyles);

    return (
        <View style={dyStyles.wholePage}>
            <View style={dyStyles.profContainer}>
                <View style={dyStyles.profilePic}>
                <Image source = {{uri: route.params.profileurl}}
                    style = {{width: 110, height: 110, position: 'absolute'}}/>
                </View>

                <View style={dyStyles.userNamePlacement}>
                    <Text style={dyStyles.userName}>{ route.params.firstname } {route.params.lastname}</Text>
                </View>
            </View>
            <View style={dyStyles.userInfo}>
                <ProfileCard title = "Category" userInfo = {route.params.category}></ProfileCard>
                <ProfileCard title = "Habit Goal" userInfo = {route.params.habitgoal}></ProfileCard>
                <ProfileCard title = "Hobby" userInfo = {route.params.hobby}></ProfileCard>
                
                <TouchableOpacity onPress={() => Linking.openURL('mailto:' + profilePage.email)}>
                    <ProfileLinkingCard title="Email" userInfo={route.params.emailaddress}></ProfileLinkingCard>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Linking.openURL('sms:' + profilePage.number)}>
                    <ProfileLinkingCard title="Phone Number" userInfo={route.params.phone}></ProfileLinkingCard>
                </TouchableOpacity>
            </View>
        </View>
    );
}
