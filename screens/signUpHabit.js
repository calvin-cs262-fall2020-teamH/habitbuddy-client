import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Input } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import { useDynamicValue } from 'react-native-dynamic';
import { dynamicStyles, dyColorCodes } from '../styles/global';
import CommonDataManager from '../data/CommonDataManager'

/**
 * SignUpHabits displays empty Habit info for first time users and POSTs to database
 * @author Kelsey Yen (kny4) and Dawson Buist (Bongo9911)
 * @param {any} route
 * @return {Input} Text inputs for "Habit Category", "Habit Goal", and "Hobby"
 */
export default function SignUpHabit(route) {
    const [category, setCategory] = useState('category');
    const [personalGoal, setPersonalGoal] = useState('PersonalGoal');
    const [hobby, setHobby] = useState('hobby');

    const commonData = CommonDataManager.getInstance();

    const dyStyles = useDynamicValue(dynamicStyles);

    const data = route.params.data;
    console.log(data);

    async function createUser() {
        let id = undefined;
        await fetch(`http://habit-buddy.herokuapp.com/user`, {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstName: data.firstName,
                lastName: data.lastName,
                emailAddress: data.emailAddress,
                phone: data.phone,
                username: data.username,
                password: data.password,
                profileURL: data.profileURL,
                hobby: hobby,
                habit: personalGoal,
                category: category,
            })
        })
        .then(async response => await response.json())
        .then(data => {
            id = data.id;
        })
        .catch((error) => {
            console.error(error);
        });

        commonData.setUserID(id);
        commonData.updateUser({});
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log('dismissed keyboard')
        }}>
            <View style={dyStyles.signUpHabitContainer}>
                <Text style={dyStyles.loginText}>Choose your habit category</Text>
                <View style={dyStyles.pickerContainer}>
                    <RNPickerSelect
                        placeholderTextColor={useDynamicValue(dyColorCodes.lightText)}
                        style={{
                            inputIOS: {
                                fontSize: 18,
                            },
                            inputAndroid: {
                                fontSize: 18,
                            }
                        }}
                        onValueChange={(val) => setCategory(val)}
                        items={[
                            { label: 'Exercise', value: 'Exercise' },
                            { label: 'Health', value: 'Health' },
                            { label: 'School', value: 'School' },
                            { label: 'Spiritual', value: 'Spiritual' },
                            { label: 'Leisure', value: 'Leisure' }
                        ]}
                    />
                </View>
                <Text style={dyStyles.loginText}>Write a personal goal</Text>
                <Input
                    containerStyle={{ width: '70%' }}
                    placeholder='i.e. walk for 20 minutes'
                    placeholderTextColor={useDynamicValue(dyColorCodes.lightText)}
                    onChangeText={(val) => setPersonalGoal(val)}
                />

                <Text style={dyStyles.loginText}>Write a hobby you have</Text>
                <Input
                    containerStyle={{ width: '70%' }}
                    placeholder='i.e. painting'
                    placeholderTextColor={useDynamicValue(dyColorCodes.lightText)}
                    onChangeText={(val) => setHobby(val)}
                />
                <TouchableOpacity style={dyStyles.loginButtonContainer} onPress={() => createUser()}>

                    <Text style={dyStyles.loginButtonText}>Finish</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
}
