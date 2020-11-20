import React, {useEffect, useState} from 'react';
import { View, Text, Image } from 'react-native';
import { useDynamicValue } from 'react-native-dynamic';
import { dyColorCodes, dynamicStyles } from '../styles/global';
import ProfileCard from "../shared/profileCard";
import { ScrollView } from 'react-native-gesture-handler';

/*Created by Joe Pastucha*/

/* Profile outputs the content of the Profile page */
export default function Profile({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://habit-buddy.herokuapp.com/user/1') //Change this once we have local storage of a active user
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);



    const dyStyles = useDynamicValue(dynamicStyles);

    return (
        <ScrollView style={{height: '100%', backgroundColor: useDynamicValue(dyColorCodes.back)}}>
            <View style={dyStyles.wholePage}>
                <View style={dyStyles.profContainer}>
                    <View style={dyStyles.profilePic}>
                        <Image source={{uri: data.profileurl}} style={{ width: 110, height: 110, position: 'absolute' }} />
                    </View>

                    <View style={dyStyles.userNamePlacement}>
                        <Text style={dyStyles.userName}>{data.firstname} {data.lastname}</Text>
                    </View>
                </View>
                <View style={dyStyles.userInfo}>
                    <ProfileCard title="Category" userInfo={data.category}></ProfileCard>
                    <ProfileCard title="Habit Goal" userInfo={data.habitgoal}></ProfileCard>
                    <ProfileCard title="Hobby" userInfo={data.hobby}></ProfileCard>
                    <ProfileCard title="Email" userInfo={data.emailaddress}></ProfileCard>
                    <ProfileCard title="Phone Number" userInfo={data.phone}></ProfileCard>

                </View>
            </View>
        </ScrollView>
    );
}



