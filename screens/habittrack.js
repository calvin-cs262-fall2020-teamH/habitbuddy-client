import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList, 
    TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/stracking';
import Card from '../shared/card';
import { DynamicStyleSheet, useDynamicValue } from 'react-native-dynamic';
import { dyColorCodes } from '../styles/global';

export default function Habittrack({ navigation }) {
    const [chabit, setChabit] = useState('Current Habit');
    const [nhabit, setNhabit] = useState('New Habit')

    const dyStyles = useDynamicValue(styles);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={dyStyles.container}>
                <View style={dyStyles.stack}>
                    <View style={dyStyles.currentH}>
                        <Text style={dyStyles.titleText}>After I</Text>
                        <TextInput   
                            style={dyStyles.inputBox}
                            placeholder='CURRENT HABIT'
                            onChangeText={(val) => setChabit(val)}/>
                    </View>
                    <View style={dyStyles.newH}>
                        <Text style={dyStyles.titleText}>I will</Text>
                        <TextInput   
                            style={dyStyles.inputBox}
                            placeholder='NEW HABIT'
                            onChangeText={(val) => setChabit(val)}/>
                    </View>
                </View>

                <View style={dyStyles.track}>
                    <Text style={dyStyles.titleText}>Habit Tracking</Text>
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
        </TouchableWithoutFeedback>
        
    );


}

const styles = new DynamicStyleSheet({
    container: {
        flex: 1,
        backgroundColor: dyColorCodes.back,
        padding: 10,
        //alignItems: 'center',
    },
    stack:{
        flex: 1,
       
        backgroundColor:'#ffdab9', //mustard
        borderRadius: 10,
        marginBottom:10,
        
    },
    currentH:{
        flex:1,
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 5,
        height: 50,
        //justifyContent:'flex-end',
        //backgroundColor:'blue',
        //position:'absolute'
    },
    newH:{
        flex:1,
        alignItems: 'center',
        marginBottom:10,
        height: 50,
        //position:'absolute'
        //justifyContent:'flex-end',
        //backgroundColor:'green',
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        fontStyle: 'italic',
        //position:'absolute',
    },
    inputBox: {
        borderWidth: 1,
        borderColor: '#777',
        //margin: 10,
        width:200,
        height: 30,
        //padding:10,
        //position:'absolute',
    },
    track:{
        flex:2.5,
        backgroundColor:'grey', 
        borderRadius: 10,
        alignItems: 'center',


    }
});