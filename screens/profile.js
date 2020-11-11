import React, { useState } from 'react';
import {StyleSheet, View, Text, FlatList, TextInput, Image} from 'react-native';
import { globalStyles } from '../styles/global';
import ProfileCard from "../shared/profileCard";

/*Created by Joe Pastucha*/

/* Profile outputs the content of the Profile page */
export default function Profile({navigation}) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('')                                           // Web service will be entered once we have it fully available.
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);


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
                    <Image source = {{uri: data.pic}} style = {{width: 110, height: 110, position: 'absolute'}}/>
                </View>

                <View style={globalStyles.userNamePlacement}>
                    <Text style={globalStyles.userName}>{ data.name }</Text>
                </View>
            </View>
            <View style={globalStyles.userInfo}>
                <ProfileCard title = "Category" userInfo = {data.category}></ProfileCard>
                <ProfileCard title = "Habit Goal" userInfo = {data.goal}></ProfileCard>
                <ProfileCard title = "Hobby" userInfo = {data.hobby}></ProfileCard>
                <ProfileCard title = "Email" userInfo = {data.email}></ProfileCard>
                <ProfileCard title = "Phone Number" userInfo = {data.number}></ProfileCard>
            </View>
        </View>
    );
}


