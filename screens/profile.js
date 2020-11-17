import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { useDynamicValue } from 'react-native-dynamic';
import { dyColorCodes, dynamicStyles } from '../styles/global';
import ProfileCard from "../shared/profileCard";
import { ScrollView } from 'react-native-gesture-handler';

/*Created by Joe Pastucha*/

/* Profile outputs the content of the Profile page */
export default function Profile({ navigation }) {

    const dyStyles = useDynamicValue(dynamicStyles);

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://habit-buddy.herokuapp.com/user/1')                                           // Web service will be entered once we have it fully available.
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);

    /*Initialization the profile page with the user information*/
    let [profilePage, setProfilePage] = useState(
        {
            name: 'Andrew Baker',
            category: 'Spiritual',
            goal: 'I want to attend chapel twice a week',
            hobby: 'Reading',
            email: 'email@gmail.com',
            number: 1234567890,
            pic: '../assets/images/george.jpg', key: '1'
        }
    );

    return (
        <ScrollView style={{height: '100%', backgroundColor: useDynamicValue(dyColorCodes.back)}}>
            <View style={dyStyles.wholePage}>
            
                <View style={dyStyles.profContainer}>
                    <View style={dyStyles.profilePic}>
                        <Image source={require('../assets/images/george.jpg')} style={{ width: 110, height: 110, position: 'absolute' }} />
                    </View>

                    <View style={dyStyles.userNamePlacement}>
                        <Text style={dyStyles.userName}>{profilePage.name}</Text>
                    </View>
                </View>

            <FlatList data={data} renderItem={({ item }) => (
                <View style={dyStyles.userInfo}>
                    <ProfileCard title="Category" userInfo={item.category}></ProfileCard>
                    <ProfileCard title="Habit Goal" userInfo={item.habitgoal}></ProfileCard>
                    <ProfileCard title="Hobby" userInfo={item.hobby}></ProfileCard>
                    <ProfileCard title="Email" userInfo={item.emailaddress}></ProfileCard>
                    <ProfileCard title="Phone Number" userInfo={item.phone}></ProfileCard>
                </View>
            )}/>

            </View>
        </ScrollView>
    );
}



