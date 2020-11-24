import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import HabittrackBlock from '../shared/habittrackBlock';
import BuddiesStreak from '../shared/buddiesStreakCard';
import { colorCodes, globalStyles } from '../styles/global';

export default function Habittrack({ navigation }) {
    const grey = "#D3D3D3";
    const orange = '#ffd699';
    let buddies = [

        // Basic static user data, used until backend is developed.
        { name: 'Andrew Baker', streak: '4', key: '1' },
        { name: 'Dawson Buist', streak: '6', key: '2' },
        // { name: 'Kelsey Yen', streak: '10', key: '3' },
        // { name: 'Belina Sainju', streak: '15', key: '4' },
        // { name: 'Joe Pastucha', streak: '60', key: '5' },
        // { name: 'Nathan Strain', streak: '90', key: '6' },
    
    ];

    return (
        <View style={styles.container}>
            <Text style={[styles.text, { marginVertical: 3, alignSelf:'center' }]}>My Week</Text>
            <HabittrackBlock
                data={[
                    { day: 'S', select: false, key: '1' },
                    { day: 'M', select: false, key: '2' },
                    { day: 'T', select: false, key: '3' },
                    { day: 'W', select: false, key: '4' },
                    { day: 'Th', select: false, key: '5' },
                    { day: 'F', select: false, key: '6' },
                    { day: 'S', select: false, key: '7' },
                ]}
            ></HabittrackBlock>
            <View style={{ flex: 6, backgroundColor: '#D3D3D3', paddingHorizontal: 7, marginTop: 20, marginHorizontal: 7, borderRadius: 5, height: 50 }}>
                <View style={{ flex: 1.5, flexDirection: 'row', paddingHorizontal: 7, paddingVertical: 5, alignItems: 'center', borderRadius: 10, justifyContent: 'center' }}>
                    <Text style={styles.text}>Daily Streak Board</Text>
                </View>
                <View style={{ flex: 1, margin: 3, paddingHorizontal: 10, alignItems: 'center', flexDirection: 'row', borderRadius: 5, backgroundColor: '#ffd699', justifyContent: 'center' }}>
                    <Text style={[styles.text, { fontWeight: 'bold' }]}>My Streak </Text>
                    <Text style={[styles.streak, { fontWeight: 'bold' }]}>0</Text>
                </View>
                <View style={{ flex: 8, paddingBottom: 15, borderRadius: 5, alignItems: 'stretch', justifyContent: 'center' }}>
                    <FlatList data={buddies} renderItem={({ item }) => (
                        <TouchableOpacity>
                            {/* Allows for traversal into the buddy details page */}
                            <BuddiesStreak>
                                <Text style={styles.text}>
                                    {item.name}
                                </Text>
                                <Text style={styles.streak}>
                                    {item.streak}
                                </Text>
                            </BuddiesStreak>
                        </TouchableOpacity>
                    )} />
                </View>



            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        alignItems:'stretch',
        justifyContent: 'center',
        backgroundColor: '#eee' //need to change this to colorCodes.back
    },

    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#222',
    },
    text: {
        fontSize: 15,
        color: '#333',
    },
    namePlacement: {
        flexDirection: 'row',
        flex: 1,
    },
    streak: {
        textAlign: "right",
        marginLeft: 'auto',
        alignItems: 'flex-end'
    }
});