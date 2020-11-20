import React, {useEffect, useState} from "react";

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

import {useDynamicValue} from 'react-native-dynamic'
import {dyColorCodes, dynamicStyles} from "../styles/global";
import CommonDataManager from "../data/CommonDataManager";


export default function EditProfile({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    let commonData = CommonDataManager.getInstance();

    useEffect(() => {
        fetch('https://habit-buddy.herokuapp.com/user/' + commonData.getUserID()) //Change this once we have local storage of a active user
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);


    const dyStyles = useDynamicValue(dynamicStyles);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}> 
            <KeyboardAwareScrollView style={{height: '100%', backgroundColor: useDynamicValue(dyColorCodes.back)}}>
                <View style={dyStyles.wholePage}>
                    <View style={dyStyles.profContainer}>
                        <View style={dyStyles.profilePic}>
                            <Image source={{uri: data.profileurl}} 
                                style = {{width: 110, height: 110, position: 'absolute'}}/>
                        </View>
                        <View style={dyStyles.userNamePlacement}>
                            <Text style={dyStyles.userName}>{ data.firstname } {data.lastname}</Text>
                        </View>
                    </View>
                    <View style={dyStyles.userInfo}>
                        <ProfileCard title = "Habit" userInfo = {data.category}></ProfileCard>
                        <EditProfileCard title = "Habit Goal" placeholder = "Enter new habit goal"></EditProfileCard>
                        <EditProfileCard title = "Hobby" placeholder = "Enter new hobby"></EditProfileCard>
                        <EditProfileCard title = "Email" placeholder = "Enter new email"></EditProfileCard>
                        <EditProfileCard title = "Phone Number" placeholder = "Enter new phone number" keyboardType='number-pad'></EditProfileCard>
                    </View>
                    <View style={dyStyles.buttonPlacement}>
                        <TouchableOpacity style={dyStyles.loginButtonContainer} 
                            onPress={() => navigation.navigate('Profile')}>
                            <Text style={dyStyles.loginButtonText}>Confirm Changes</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </TouchableWithoutFeedback>
    );
}