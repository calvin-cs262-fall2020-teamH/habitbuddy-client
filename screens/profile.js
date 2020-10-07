import React, { useState } from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import { globalStyles } from '../styles/global';
import ProfileCard from "../shared/profileCard";
import { MaterialIcons } from '@expo/vector-icons';


/* Profile outputs the content of the Profile page */
export default function Profile({route, navigation}) {

    /*Initialization the profile page with the user information*/
    let [profilePage, setProfilePage] = useState(
        {name: 'Andrew Baker', habit: 'Attending chapel', hobby: 'Reading', email: 'coolguy@yeet.com', pic: '../assets/images/george.jpg', key: '1'},
    );

    /*Function that changes the users email*/
    const emailUpdate = () => {
        const enteredEmail = prompt('Please enter your *new* name (you probably should not be able to do this...)');
        setProfilePage({name: profilePage.name, habit: profilePage.habit, hobby: profilePage.hobby, email: enteredEmail, pic: profilePage.pic, key: profilePage.key})
    }
    /*Function that changes the users habit*/
    const habitUpdate = () => {
        const enteredHabit = prompt('Please enter your *new* name (you probably should not be able to do this...)');
        setProfilePage({name: profilePage.name, habit: enteredHabit, hobby: profilePage.hobby, email: profilePage.email, pic: profilePage.pic, key: profilePage.key})
    }
    /*Function that changes the users hobbies*/
    const activityUpdate = () => {
        const enteredHobby = prompt('Please enter your *new* name (you probably should not be able to do this...)');
        setProfilePage({name: profilePage.name, habit: profilePage.habit, hobby: enteredHobby, email: profilePage.email, pic: profilePage.pic, key: profilePage.key})
    }


    return (
        /*View container that holds all the UI data*/
        <View style={styles.container}>
            <View style={styles.containerLeft}>
                    <ProfileCard styles={styles.contentHolder}>
                        <Text style={globalStyles.titleText}> Name: { profilePage.name }</Text>
                    </ProfileCard>

                    <ProfileCard styles={styles.contentHolder}>
                        <Text style={globalStyles.titleText}> Email: { profilePage.email }</Text>
                        <MaterialIcons name="edit" size={20} color='#333' style={styles.leftIcon} onPress={emailUpdate}/>
                    </ProfileCard>

                    <ProfileCard styles={styles.contentHolder}>
                        <Text style={globalStyles.titleText}> Habits: { profilePage.habit }</Text>
                        <MaterialIcons name="edit" size={20} color='#333' style={styles.leftIcon} onPress={habitUpdate}/>
                    </ProfileCard>

                    <ProfileCard styles={styles.contentHolder}>
                        <Text style={globalStyles.titleText}> Activities: { profilePage.hobby }</Text>
                        <MaterialIcons name="edit" size={20} color='#333' style={styles.leftIcon} onPress={activityUpdate}/>
                    </ProfileCard>
            </View>
            <View style={styles.containerRight}>
                <View style={styles.profilePic}>
                     <Text>Profile Pic</Text>
                </View>
            </View>
        </View>
    );
};

/*Styles for everything on the page*/
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
    },
    profileInfo: {
        flexDirection: 'column',
        flex: .6,
        backgroundColor: 'blue'
    },
    nameInfo: {
        flexDirection: 'column',
        flex: .2,
        backgroundColor: 'orange',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5
    },




})