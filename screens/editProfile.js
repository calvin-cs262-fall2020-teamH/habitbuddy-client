import React, {useState} from "react";
import {StyleSheet, Text, View, TextInput, Button} from "react-native";
import ProfileCard from "../shared/profileCard";
import {globalStyles} from "../styles/global";
import {MaterialIcons} from "@expo/vector-icons";

export default function EditProfile({navigation, route}) {


    /*Initialization the profile page with the user information*/
    let [tempProfilePage, setTempProfilePage] = useState(
        {name: route.params.name, habit: route.params.habit, hobby: route.params.hobby, email: route.params.email, pic: route.params.pic, key: route.params.key},
    );

    /*The intention behind this function is to change the actual user infomation other than this page*/
    let clickHandler = () => {
        route.params.email = tempProfilePage.email;
        route.params.habit = tempProfilePage.habit;
        route.params.hobby = tempProfilePage.hobby;
    }

    return (
        /*View container that holds all the UI data*/
        <View style={styles.container}>
            <View style={styles.containerLeft}>
                {/*Card that contains and displays user's name*/}
                <ProfileCard styles={styles.contentHolder}>
                    <Text style={globalStyles.titleText}> Name: { tempProfilePage.name }</Text>
                </ProfileCard>

                {/*Card that contains and displays user's email and allows the user to change it*/}
                <ProfileCard styles={styles.contentHolder}>
                    <Text style={globalStyles.titleText}> Email: { tempProfilePage.email }</Text>
                    <TextInput

                        placeholder='Enter new Email'
                        onChangeText={(val) => setTempProfilePage({
                            name: tempProfilePage.name,
                            habit: tempProfilePage.habit,
                            hobby: tempProfilePage.hobby,
                            email: val,
                            pic: tempProfilePage.pic,
                            key: tempProfilePage.key
                        })
                        }
                    />
                </ProfileCard>

                {/*Card that contains and displays user's habit and is able to change it*/}
                <ProfileCard styles={styles.contentHolder}>
                    <Text style={globalStyles.titleText}> Habits: { tempProfilePage.habit }</Text>
                    <TextInput
                        placeholder='Enter new Habits'
                        onChangeText={(val) => setTempProfilePage({
                            name: tempProfilePage.name,
                            habit: val,
                            hobby: tempProfilePage.hobby,
                            email: tempProfilePage.email,
                            pic: tempProfilePage.pic,
                            key: tempProfilePage.key
                        })
                        }
                    />
                </ProfileCard>

                {/*Card that contains and displays user's hobby and is able to change it*/}
                <ProfileCard styles={styles.contentHolder}>
                    <Text style={globalStyles.titleText}> Activities: { tempProfilePage.hobby }</Text>
                    <TextInput

                        placeholder='Enter new Activities'
                        onChangeText={(val) => setTempProfilePage({
                            name: tempProfilePage.name,
                            habit: tempProfilePage.habit,
                            hobby: val,
                            email: tempProfilePage.email,
                            pic: tempProfilePage.pic,
                            key: tempProfilePage.key
                        })
                        }
                    />
                </ProfileCard>

                {/*Button that calls clickHandler() to update information outside of this screen*/}
                <Button title='Confirm changes' onPress={clickHandler}/>
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

