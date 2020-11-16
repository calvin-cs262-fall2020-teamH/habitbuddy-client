import React, { useState } from 'react';
import { View, Text} from 'react-native';
import { DynamicStyleSheet, useDynamicValue, useColorSchemeContext} from 'react-native-dynamic';
import { dyColorCodes } from '../styles/global';

import HabitTrackBlock from '../shared/habitTrackBlock';

export default function HabitTrack({ navigation }) {

    const dyStyles = useDynamicValue(styles);
    const mode = useColorSchemeContext();
    const lastMode = '';

    const habitblockElement = React.createRef();

    mode === lastMode ? () => { habitblockElement.current.changeTheme(mode); lastMode = mode; } : {};

    return (
        <View style={dyStyles.container}>
            <Text style={dyStyles.titleText}>Track My Habit</Text>
            <HabitTrackBlock
                ref = {habitblockElement}
                data={[
                    {day:'1',select:false,key:'1'}, 
                    {day:'2',select:false,key:'2'},
                    {day:'3',select:false,key:'3'},
                    {day:'4',select:false,key:'4'},
                    {day:'5',select:false,key:'5'},
                    {day:'6',select:false,key:'6'},
                    {day:'7',select:false,key:'7'},
                    {day:'8',select:false,key:'8'},
                    {day:'9',select:false,key:'9'},
                    {day:'10',select:false,key:'10'},
                    {day:'11',select:false,key:'11'},
                    {day:'12',select:false,key:'12'},
                    {day:'13',select:false,key:'13'},
                    {day:'14',select:false,key:'14'},
                    {day:'15',select:false,key:'15'},
                    {day:'16',select:false,key:'16'},
                    {day:'17',select:false,key:'17'},
                    {day:'18',select:false,key:'18'},
                    {day:'19',select:false,key:'19'},
                    {day:'20',select:false,key:'20'},
                    {day:'21',select:false,key:'21'},
                    {day:'22',select:false,key:'22'},
                    {day:'23',select:false,key:'23'},
                    {day:'24',select:false,key:'24'},
                    {day:'25',select:false,key:'25'},
                    {day:'26',select:false,key:'26'},
                    {day:'27',select:false,key:'27'},
                    {day:'28',select:false,key:'28'},
                    {day:'29',select:false,key:'29'},
                    {day:'30',select:false,key:'30'},]}
                theme = {mode}
            ></HabitTrackBlock>
        </View>
    );
}

const styles = new DynamicStyleSheet({
    container: {
        flex: 1,
        backgroundColor: dyColorCodes.back,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
   
    titleText: {
		fontSize: 18,
		fontWeight: 'bold',
        color: dyColorCodes.text,
        paddingVertical: 10,
        top: 10,
    },
});