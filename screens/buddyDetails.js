import React, { useState } from 'react';
import {StyleSheet, View, Text, FlatList, TextInput, Image, Linking, TouchableOpacity} from 'react-native';
import { globalStyles } from '../styles/global';
import ProfileCard from "../shared/profileCard";
import ProfileLinkingCard from "../shared/profileLinkingCard";


/*Created by Joe Pastucha/Dawson*/

/* Profile outputs the content of the Profile page */
export default function Profile({route, navigation}) {



    /*Initialization the profile page with the user information*/
    let [profilePage, setProfilePage] = useState(
        {name: route.params.name,
            category: route.params.category,
            goal: route.params.goal,
            hobby: route.params.hobby,
            email: route.params.email,
            number: route.params.number,
            pic: route.params.pic, key: '1'},
    );



    return (
        <View style={globalStyles.wholePage}>
            <View style={globalStyles.profContainer}>
                <View style={globalStyles.profilePic}>
                    <Image source = {{uri: profilePage.pic}} style = {{width: 110, height: 110, position: 'absolute'}}/>
                </View>

                <View style={globalStyles.userNamePlacement}>
                    <Text style={globalStyles.userName}>{ profilePage.name }</Text>
                </View>
            </View>
            <View style={globalStyles.userInfo}>
                <ProfileCard title = "Category" userInfo = {profilePage.category}></ProfileCard>
                <ProfileCard title = "Habit Goal" userInfo = {profilePage.goal}></ProfileCard>
                <ProfileCard title = "Hobby" userInfo = {profilePage.hobby}></ProfileCard>
                <TouchableOpacity onPress={() => Linking.openURL('mailto:' + profilePage.email)}>
                    <ProfileLinkingCard title = "Email" userInfo = {profilePage.email}></ProfileLinkingCard>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => Linking.openURL('sms:' + profilePage.number)}>
                    <ProfileLinkingCard title = "Phone Number" userInfo = {profilePage.number}></ProfileLinkingCard>
                </TouchableOpacity>
            </View>
        </View>
    );
}




const styles =  StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    containerLeft: {
        flex: .6,
        flexDirection: 'column'
    },
    containerRight: {
        flex: .4,
        alignItems: 'center'
    },
    name: {
        fontSize: 24,
        marginLeft: 15,
        marginTop: 15
    },
    profilePic: {
        width: 125,
        height: 125,
        marginTop: 32,
        alignItems: 'center',
        borderRadius: 5,
        justifyContent: 'center',
        backgroundColor: "orange",
        position: 'absolute',
    },
    userEmail: {
        fontSize: 24,
        marginLeft: 15,
        marginTop: 15
    },
    titleText: {
        justifyContent: 'center'

    },
    cardItems: {
        justifyContent: 'center'
    },
    contentHolder: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: 'orange',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 7,
        marginVertical: 9,
    },
    leftIcon: {
        textAlign: 'right'
    }



})