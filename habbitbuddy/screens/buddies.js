import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function Buddies({ navigation }) {
    const [reviews, setReviews] = useState([

        {name: 'Andrew Baker', habit: 'Attending chapel', hobby: 'Reading', key: '1'},
        {name: 'Belina Sainju', habit: 'Attending chapel', hobby: 'Reading', key: '2'}

        
    ]);

    return (
        <View style={globalStyles.container}>
            <FlatList data={reviews} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('BuddyDetails', item)}>
                    <Card>
                        <Text style={globalStyles.titleText}>{ item.name }</Text>
                        <Text style={globalStyles.buddyCards}>{ item.habit }</Text>
                    </Card>
                </TouchableOpacity>
            )} />
        </View>
    );
}
