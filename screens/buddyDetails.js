import React, { useState } from 'react';
import { View, Text, Image, Linking, TouchableOpacity} from 'react-native';
import { useDynamicValue } from 'react-native-dynamic';
import { dynamicStyles } from '../styles/global';
import ProfileCard from "../shared/profileCard";
import ProfileLinkingCard from "../shared/profileLinkingCard";

/*Created by Joe Pastucha/Dawson*/

/* Profile outputs the content of the Buddy Details page */
export default function BuddyDetails({route, navigation}) {
    /*Initialization the profile page with the user information*/
  
    let [profilePage, setProfilePage] = useState(
        {name: route.params.firstname + " " + route.params.lastname,
            category: route.params.category,
            goal: route.params.habitgoal,
            hobby: route.params.hobby,
            email: route.params.emailaddress,
            number: route.params.phone,
            pic: route.params.profileurl, 
            key: route.params.id},
    );

    const dyStyles = useDynamicValue(dynamicStyles);

    return (
        <View style={dyStyles.wholePage}>
            <View style={dyStyles.profContainer}>
                <View style={dyStyles.profilePic}>
                <Image source = {{uri: route.params.profileurl}}
                    style = {{width: 110, height: 110, position: 'absolute'}}/>
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
                    <ProfileLinkingCard title="Email" userInfo={ profilePage.email }></ProfileLinkingCard>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Linking.openURL('sms:' + profilePage.number)}>
                    <ProfileLinkingCard title="Phone Number" userInfo={profilePage.number}></ProfileLinkingCard>
                </TouchableOpacity>
            </View>
        </View>
    );
}
