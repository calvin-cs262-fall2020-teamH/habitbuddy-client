import React, { useEffect, useState } from "react";

import {
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableOpacity
} from "react-native";

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import EditProfileCard from "../shared/editProfileCard";
import ProfileCard from "../shared/profileCard";

import { useDynamicValue } from 'react-native-dynamic'
import { dyColorCodes, dynamicStyles } from "../styles/global";
import CommonDataManager from "../data/CommonDataManager";


export default function EditProfile({ navigation, route }) {
    const [isLoading, setLoading] = useState(true);
    const [habit, setHabit] = useState(null);
    const [hobby, setHobby] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhoneNumber] = useState(null)
    const [data, setData] = useState([]);


    useEffect(() => {
        fetch('https://habit-buddy.herokuapp.com/user/' + commonData.getUserID())
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    let commonData = CommonDataManager.getInstance();


    async function updateUser() {
        await fetch('http://habit-buddy.herokuapp.com/user/' + commonData.getUserID(), {
            method: 'PUT', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                habit: (habit ? habit : data.habit),
                hobby: (hobby ? hobby : data.hobby),
                phone: (phone ? phone : data.phone),
                emailAddress: (email ? email : data.emailaddress),
            })
        })
            .then(async response => await response.json())
            .catch((error) => {
                console.error(error);
            });
    }

    const dyStyles = useDynamicValue(dynamicStyles);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <KeyboardAwareScrollView style={{ height: '100%', backgroundColor: useDynamicValue(dyColorCodes.back) }}>
                <View style={dyStyles.wholePage}>
                    <View style={dyStyles.profContainer}>
                        <View style={dyStyles.profilePic}>
                            <Image source={{ uri: data.profileurl }}
                                style={{ width: 110, height: 110, position: 'absolute' }} />
                        </View>
                        <View style={dyStyles.userNamePlacement}>
                            <Text style={dyStyles.userName}>{data.firstname} {data.lastname}</Text>
                        </View>
                    </View>
                    <View style={dyStyles.userInfo}>
                        <ProfileCard title="Habit" userInfo={data.category} />
                        <EditProfileCard title="Habit Goal" placeholder="Enter new habit goal" change={setHabit} ></EditProfileCard>
                        <EditProfileCard title="Hobby" placeholder="Enter new hobby" change={setHobby} ></EditProfileCard>
                        <EditProfileCard title="Email" placeholder="Enter new email" change={setEmail} ></EditProfileCard>
                        <EditProfileCard title="Phone Number" placeholder="Enter new phone number" keyboardType='number-pad' change={setPhoneNumber} ></EditProfileCard>
                    </View>
                    <View style={dyStyles.buttonPlacement}>
                        <TouchableOpacity style={dyStyles.loginButtonContainer}
                            onPress={() => {
                                console.log(habit);
                                console.log(hobby);
                                console.log(phone);
                                console.log(email);
                                updateUser();
                                commonData.updateProfile();
                                navigation.navigate('Profile');
                            }}>
                            <Text style={dyStyles.loginButtonText}>Confirm Changes</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </TouchableWithoutFeedback>
    );
}