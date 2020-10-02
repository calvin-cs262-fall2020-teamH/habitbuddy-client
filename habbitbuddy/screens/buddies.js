import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

// Written by Andrew Baker

export default function Buddies({ navigation }) {
    const [reviews, setReviews] = useState([

        {name: 'Andrew Baker', habit: 'Attending chapel', hobby: 'Reading', key: '1'},
        {name: 'Dawson Buist', habit: 'Reading books', hobby: 'Hacking', key: '2'},
        {name: 'Kelsey Yen', habit: 'Sleeping', hobby: 'Engineering', key: '3'},
        {name: 'Belina Sainju', habit: 'Watching TV', hobby: 'Reading', key: '4'},
        {name: 'Joe Pastucha', habit: 'Watching Films', hobby: 'Sleeping', key: '5'},
        {name: 'Nathan Strain', habit: 'Meditation', hobby: 'School', key: '6'},
    
    ]);

    return (
        <View style={globalStyles.buddyDisplayContainer}>
            <FlatList data={reviews} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('BuddyDetails', item)}>
                    <Card>  
                        {/* <Image source = {require('../assets/images/george.jpg')} style = {{width: 50, height: 50, position: 'absolute'}}/>  */}

                        {/* image width and height 50 by 50. position absolute to keep picture and text in the same line */}

                        <Text style={globalStyles.buddyCardTitle}>{ item.name }</Text>
                        <Text style={globalStyles.buddyCardText}>{ item.habit }</Text>
                    </Card>
                </TouchableOpacity>
            )} />
        </View>
    );
} 
