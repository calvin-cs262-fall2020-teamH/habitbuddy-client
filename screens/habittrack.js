import React, { useState } from 'react';
import {StyleSheet, View, Text, Button, TextInput, TouchableOpacity, FlatList, TouchableHighlight, CardItem } from 'react-native';
import { globalStyles } from '../styles/stracking';
import Card from '../shared/card';

export default function Habittrack({ navigation }) {
    const green = "#39D1B4";
    const grey = "#D3D3D3";
    const orange = '#ffd699';
    const [chcolor, setColor] = useState(grey);
    const [count, setCount] = useState(1);
    const [days, setDays] = useState([{day:'Day 1',key:'1'}]);

    const changeColor = () => {
        // setCount(count+1)
        // setDays(days.concat({key:count.toString()}))
        const newColor = chcolor == green ? grey : green
        setColor(newColor);
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Track My Habit</Text>
            <Text></Text>

            <FlatList data={days} renderItem={({ item }) => (
                <TouchableOpacity >
                    {/* Changes color of card when clicked i.e. each colored card represents the day when habit completed */}
                    {/* <Card>
                        <Text style={styles.titleText}>{item.day}</Text>
                    </Card> */}
                    
                    <Button 
                        title={item.day}
                        onPress={ changeColor } 
                        color = {chcolor}

                    />
                                              
                </TouchableOpacity>
            )}/>
        </View>

        
    );


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        padding: 10,
        alignItems: 'center',
    },
   
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        //position:'absolute',
    },

});