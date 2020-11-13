import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Input } from 'react-native-elements';
import  RNPickerSelect from 'react-native-picker-select';
import { colorCodes, globalStyles } from '../styles/global';

/* emptyHabits lets you choose your habits for the first time 
*  Written by Kelsey Yen
*/

export default function EmptyHabits({ navigation, route }) {
    const {updateData} = route.params;

    const [personalGoal, setPersonalGoal] = useState('PersonalGoal');
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log('dismissed keyboard')
        }}>
            <View style={globalStyles.emptyHabitContainer}>
                <Text style={globalStyles.loginText}>Choose a habit category</Text>
                <View style={globalStyles.picker}>
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
                <Text style={globalStyles.loginText}>Write a personal goal</Text>
                <Input
                    containerStyle={{width: '75%'}}
                    style={globalStyles.input}
                    placeholder='i.e. walk for 20 minutes'
                    onChangeText={(val) => setPersonalGoal(val)}
                />
                <TouchableOpacity style={globalStyles.loginButtonContainer} onPress={() => updateData()}>
                    <Text style={globalStyles.loginButtonText}>Finish</Text>
                </TouchableOpacity>    
            </View>
        </TouchableWithoutFeedback>
    );
}
