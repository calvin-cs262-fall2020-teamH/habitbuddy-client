import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../styles/stracking';
import Card from '../shared/card';

export default function Habittrack({ navigation }) {
    // const [reviews, setReviews] = useState([

    //     {name: 'Andrew Baker', habit: 'Attending chapel', hobby: 'Reading', key: '1'},
    //     {name: 'Belina Sainju', habit: 'Attending chapel', hobby: 'Reading', key: '2'}

        
    // ]);

    const [chabit, setChabit] = useState('Current Habit');
    const [nhabit, setNhabit] = useState('New Habit')

    return (
        <View style={styles.container}>
            <View style={styles.stack}>
                <View style={styles.currentH}>
                    <Text style={styles.titleText}>After I</Text>
                    <TextInput   
                        style={styles.inputBox}
                        placeholder='CURRENT HABIT'
                        onChangeText={(val) => setChabit(val)}/>
                </View>
                <View style={styles.newH}>
                    <Text style={styles.titleText}>I will</Text>
                    <TextInput   
                        style={styles.inputBox}
                        placeholder='NEW HABIT'
                        onChangeText={(val) => setChabit(val)}/>
                </View>
                

            </View>
            

            {/* <FlatList data={reviews} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('BuddyDetails', item)}>
                    <Card>
                        <Text style={globalStyles.titleText}>{ item.name }</Text>
                        <Text style={globalStyles.buddyCards}>{ item.habit }</Text>
                    </Card>
                </TouchableOpacity>
            )} /> */}
        </View>

        
    );


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15,
    },
    stack:{
        flex: 0.3,
        justifyContent:'flex-end',
        backgroundColor:'#ffdab9', //mustard
        borderRadius: 10,
    },
    currentH:{
        flex:0.5,
        alignItems: 'center',
        marginTop: 10,
        justifyContent:'flex-end',
        //backgroundColor:'blue',
    },
    newH:{
        flex:0.5,
        alignItems: 'center',
        marginBottom:10,
        justifyContent:'flex-end',
        //backgroundColor:'green',
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 10,
        fontStyle: 'italic'
    },
    inputBox: {
        borderColor:'#d2b48c',
        //backgroundColor: '#fff',
        fontSize: 22,
    }
});