import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import  RNPickerSelect from 'react-native-picker-select';
import { useDynamicValue } from 'react-native-dynamic';
import { dynamicStyles, dyColorCodes } from '../styles/global';

/* emptyHabits lets you choose your habits for the first time 
*  Written by Kelsey Yen
*/

export default function EmptyHabits({ navigation, route }) {
    const {updateData} = route.params;

    const [personalGoal, setPersonalGoal] = useState('PersonalGoal');

    const dyStyles = useDynamicValue(dynamicStyles);

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log('dismissed keyboard')
        }}>
            <View style={dyStyles.emptyHabitContainer}>
                <Text style={dyStyles.loginText}>Choose your habit category</Text>
                <View style={dyStyles.input}>
                    <RNPickerSelect
                        onValueChange={(val) => console.log(val)}
                        items={[
                            { label: 'Fitness', value: 'fitness'},
                            { label: 'Health', value: 'health'},
                            { label: 'School', value: 'school'},
                            { label: 'Spiritual', value: 'spiritual'},
                            { label: 'Leisure', value: 'leisure'}
                        ]}
                    />
                </View>
                <Text style={dyStyles.loginText}>Write your personal goal</Text>
                <TextInput
                    style={dyStyles.input}
                    placeholderTextColor = { useDynamicValue(dyColorCodes.lightText) }
                    placeholder='i.e. walk for 20 minutes'
                    onChangeText={(val) => setPersonalGoal(val)}
                />
                <TouchableOpacity style={dyStyles.loginButtonContainer} onPress={() => updateData()}>
                    <Text style={dyStyles.loginButtonText}>Go to Home</Text>
                </TouchableOpacity>    
            </View>
        </TouchableWithoutFeedback>
    );
}
