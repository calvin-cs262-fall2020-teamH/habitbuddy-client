import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import  RNPickerSelect from 'react-native-picker-select';
import { globalStyles } from '../styles/global';


/* emptyHabits lets you choose your habits for the first time 
*  Written by Kelsey Yen
*/

export default function EmptyHabits({ navigation }) {
    const [personalGoal, setPersonalGoal] = useState('PersonalGoal');
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log('dismissed keyboard')
        }}>
            <View style={globalStyles.emptyHabitContainer}>
                <Text style={globalStyles.loginText}>Choose your habit cetagory</Text>
                <View style={globalStyles.input}>
                    <RNPickerSelect
                        onValueChange={(val) => console.log(val)}
                        items={[
                            { label: 'Fitness', value: 'fitness'},
                            { label: 'Studying', value: 'studying'},
                            { label: 'Reading', value: 'reading'},
                            { label: 'Writing', value: 'writing'},
                            { label: 'Meditating', value: 'meditating'}
                        ]}
                    />
                </View>
                <Text style={globalStyles.loginText}>Write your personal goal</Text>
                <TextInput
                    style={globalStyles.input}
                    placeholder='i.e. walk for 20 minutes'
                    onChangeText={(val) => setPersonalGoal(val)}
                />
                <TouchableOpacity style={globalStyles.loginButtonContainer} onPress={() => navigation.navigate('Home')}>
                    <Text style={globalStyles.loginButtonText}>Go to Home</Text>
                </TouchableOpacity>    
            </View>
        </TouchableWithoutFeedback>
    );
}
