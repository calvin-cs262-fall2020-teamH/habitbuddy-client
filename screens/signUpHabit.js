import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Input } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import { useDynamicValue } from 'react-native-dynamic';
import { dynamicStyles, dyColorCodes } from '../styles/global';
import CommonDataManager from '../data/CommonDataManager'

/* signUpHabits lets you choose your habit and write a habit goal 
*  Written by Kelsey Yen
*/

export default function SignUpHabit({ navigation, route }) {
    const { updateData } = route.params;

    const [personalGoal, setPersonalGoal] = useState('PersonalGoal');

    const dyStyles = useDynamicValue(dynamicStyles);

    const commonData = CommonDataManager.getInstance();

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
                        onValueChange={(val) => console.log(val)}
                        items={[
                            { label: 'Fitness', value: 'fitness' },
                            { label: 'Health', value: 'health' },
                            { label: 'School', value: 'school' },
                            { label: 'Spiritual', value: 'spiritual' },
                            { label: 'Leisure', value: 'leisure' }
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
                <TouchableOpacity style={dyStyles.loginButtonContainer} onPress={() => {updateData({}); commonData.setUserID('7')}}>
                    <Text style={dyStyles.loginButtonText}>Finish</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
}
