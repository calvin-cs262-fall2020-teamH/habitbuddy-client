import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { colorCodes, globalStyles } from '../styles/global';
import Card from '../shared/card';

// Written by Andrew Baker
// Date 10.8.20
// Sets up the Home screen to display basic information and app traversal

export default function Home({ navigation }) {

    navigation.navigate('Login');

    return (
        <View style={styles.container}> 
        {/* The container sets up the columns for the homescreen. Adding a basic view adds additional columns to the row*/}
            <View style={styles.containerAcross}>
                {/* The containerAcross creates a system of rows for data and cards. Add a containerAcross view to add an additional row */}
                <View style={styles.corners}>
                    <Card>
                        <Text>Your Habit</Text>
                        <Text style={globalStyles.titleText}>Going to chapel</Text>
                        <Text></Text>
                    </Card>
                </View>
            </View>
            <View style={styles.containerAcross}>
                <View style={styles.corners}>
                    {/* <TouchableOpacity onPress={() => navigation.navigate('HabitSelector')}> */}
                        <Card>
                            <Text style={globalStyles.titleText}>Streak</Text>
                            <Text/>
                            {/* Using static data until the backend is built to keep track of user data */}
                            <Text style={styles.counter}>2</Text>
                            <Text/>
                        </Card>
                    {/* </TouchableOpacity> */}
                </View>
                <View style={styles.corners}>
                    <TouchableOpacity onPress={() => navigation.navigate('Buddies')}>
                        <Card>
                            <Text style={globalStyles.titleText}>Buddies</Text>
                            <Text/>
                            <Text style={styles.counter}>6</Text>
                            <Text/>
                        </Card>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colorCodes.back,
    },
    containerAcross: {
        flex: 1,
        flexDirection: 'row',
    },
    corners: {
        flex: 1,
        alignItems: 'stretch',
        padding: 10,
    },
    images: {
        width: 120, 
        height: 120,
    },
    counter: {
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center',
    }
})