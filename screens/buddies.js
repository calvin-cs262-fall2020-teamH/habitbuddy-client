import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

// Written by Andrew Baker

export default function Buddies({ navigation }) {
    const [buddies, setReviews] = useState([

        // Basic static user data, used until backend is developed.
        {name: 'Andrew Baker', category: 'Spiritual', goal: 'I want to attend chapel twice a week', hobby: 'Reading', email: 'coolguy@yeet.com', pic: '../assets/images/george.jpg', key: '1'},
        {name: 'Dawson Buist', category: 'Education', goal: 'I want to read one book every week', hobby: 'Hacking', email: 'coolguy@yeet.com', pic: '../assets/images/george.jpg', key: '2'},
        {name: 'Kelsey Yen', category: 'Spiritual', goal: 'I want to rest every day for an hour', hobby: 'Engineering', email: 'coolguy@yeet.com', pic: '../assets/images/george.jpg', key: '3'},
        {name: 'Belina Sainju', category: 'Relaxation', goal: 'I want watch TV every day', hobby: 'Reading', email: 'coolguy@yeet.com', pic: '../assets/images/george.jpg', key: '4'},
        {name: 'Joe Pastucha', category: 'Relaxation', goal: 'I want to watch 2 movies every week', hobby: 'Sleeping', email: 'coolguy@yeet.com', pic: '../assets/images/george.jpg', key: '5'},
        {name: 'Nathan Strain', category: 'Spiritual', goal: 'I want to meditate daily', hobby: 'School', email: 'coolguy@yeet.com', pic: '../assets/images/george.jpg', key: '6'},

    ]);

    return (
        <View style={globalStyles.buddyDisplayContainer}>
            <FlatList data={buddies} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('BuddyDetails', item)}>
                    {/* Allows for traversal into the buddy details page */}
                    <Card>  
                        <Image source = {require('../assets/images/george.jpg')} style = {{width: 50, height: 50, position: 'absolute'}}/> 

                        {/* image width and height 50 by 50. position absolute to keep picture and text in the same line. basic user profile */}

                        <Text style={globalStyles.buddyCardTitle}>{ item.name }</Text>
                        <Text style={globalStyles.buddyCardText}>{ item.habit }</Text>
                    </Card>
                </TouchableOpacity>
            )} />
        </View>
    );
} 
