import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import HabittrackBlock from '../shared/habittrackBlock';

export default function Habittrack({ navigation }) {
    const grey = "#D3D3D3";
    const orange = '#ffd699';

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Track My Habit</Text>
            <HabittrackBlock
                data={[
                    {day:'1',select:false,key:'1'}, 
                    {day:'2',select:false,key:'2'},
                    {day:'3',select:true,key:'3'},
                    {day:'4',select:false,key:'4'},
                    {day:'5',select:false,key:'5'},
                    {day:'6',select:true,key:'6'},
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
            ></HabittrackBlock>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee' //need to change this to colorCodes.back
    },
   
    titleText: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#222',
    },
});