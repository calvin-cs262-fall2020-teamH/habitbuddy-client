import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { useDynamicValue } from 'react-native-dynamic';
import { dyColorCodes, dynamicStyles } from '../styles/global';
import ProfileCard from "../shared/profileCard";
import { ScrollView } from 'react-native-gesture-handler';
import CommonDataManager from '../data/CommonDataManager';

/*Created by Joe Pastucha*/

/* Profile outputs the content of the Profile page */
export default function Profile({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [updated, setUpdated] = useState(false);

    let commonData = CommonDataManager.getInstance();

    useEffect(() => {
        fetch('https://habit-buddy.herokuapp.com/user/' + commonData.getUserID())
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    function update() {
        fetch('https://habit-buddy.herokuapp.com/user/' + commonData.getUserID())
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }

    commonData.setUpdateProfile(update);

    const dyStyles = useDynamicValue(dynamicStyles);

    return (
        <ScrollView style={{ height: '100%', backgroundColor: useDynamicValue(dyColorCodes.back) }}>
            <View style={dyStyles.wholePage}>

                <View style={dyStyles.profContainer}>
                    <View style={dyStyles.profilePic}>
                        <Image source={{ uri: data.profileurl }} style={{ width: 110, height: 110, position: 'absolute' }} />
                    </View>

                    <View style={dyStyles.userNamePlacement}>
                        <Text style={dyStyles.userName}>{data.firstname} {data.lastname}</Text>
                    </View>
                </View>
                <View style={dyStyles.userInfo}>
                    <ProfileCard title="Category" userInfo={data.category}></ProfileCard>
                    <ProfileCard title="Habit Goal" userInfo={data.habit}></ProfileCard>
                    <ProfileCard title="Hobby" userInfo={data.hobby}></ProfileCard>
                    <ProfileCard title="Email" userInfo={data.emailaddress}></ProfileCard>
                    <ProfileCard title="Phone Number" userInfo={data.phone}></ProfileCard>
                </View>
            </View>
        </ScrollView>
    );
}



