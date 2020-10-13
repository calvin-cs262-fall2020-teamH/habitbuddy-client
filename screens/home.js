import React, { useState } from 'react';
import {ImageBackground, StyleSheet, View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import Circle from '../shared/circleCard';

// Written by Andrew Baker
// Date 10.8.20
// Sets up the Home screen to display basic information and app traversal


// Two possible background images.
// const background = { uri: "https://pngimg.com/uploads/bamboo/bamboo_PNG51.png"};
const background = { uri: "http://pngimg.com/uploads/bamboo/bamboo_PNG29.png"};

export default function Home({ navigation }) {

    return (
        <ImageBackground source={background} style={styles.image}>
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
                    <TouchableOpacity onPress={() => navigation.navigate('Habittrack')}>
                        <Circle>
                            <Text style={globalStyles.titleText}>Streak</Text>
                            <Text/>
                            {/* Using static data until the backend is built to keep track of user data */}
                            <Text style={styles.counter}>2</Text>
                            <Text/>
                        </Circle>
                    </TouchableOpacity>
                </View>
                <View style={styles.corners}>
                    <TouchableOpacity onPress={() => navigation.navigate('Buddies')}>
                        <Circle>
                            <Text style={globalStyles.titleText}>Buddies</Text>
                            <Text/>
                            <Text style={styles.counter}>6</Text>
                            <Text/>
                        </Circle>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
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
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: "center",
        width: '100%',
        height: '100%',
      },
})