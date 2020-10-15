import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import Circle from '../shared/circleCard';

// Written by Andrew Baker
// Date 10.8.20
// Sets up the Home screen to display basic information and app traversal


// Two possible background images.
// const background = { uri: "https://pngimg.com/uploads/bamboo/bamboo_PNG51.png"};
const background = { uri: "http://pngimg.com/uploads/bamboo/bamboo_PNG29.png" };
//Panda image
const panda = { uri: "https://cdn.pixabay.com/photo/2016/10/07/22/12/panda-1722704_640.png"};

export default function Home({ navigation }) {

    var hour = new Date().getHours();
    var greeting = "";

    if (hour < 5) {
        greeting = "Good night";
    } else if (hour < 12) {
        greeting = "Good morning";
    } else if (hour < 17) {
        greeting = "Good afternoon";
    } else if (hour < 20) {
        greeting = "Good evening";
    } else if (hour < 23) {
        greeting = "Good night";
    } else {
        greeting = "Hello";
    }

    var andHome = false;
    // used to pick between two homescreen options. TEMPORARY
    // when changing the screens, the first version uses flex 0.3 in countainerAcross, which is commented out below. to view the differences make sure you change that.

    if (andHome) {
        return (

            <ImageBackground source={background} style={styles.image} blurRadius={0.6}>

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
                                    <Text style={styles.title}>Streak</Text>
                                    <Text />
                                    {/* Using static data until the backend is built to keep track of user data */}
                                    <Text style={styles.counter}>2</Text>
                                    <Text />
                                </Circle>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.corners}>
                            <TouchableOpacity onPress={() => navigation.navigate('Buddies')}>
                                <Circle>
                                    <Text style={styles.title}>Buddies</Text>
                                    <Text />
                                    <Text style={styles.counter}>6</Text>
                                    <Text />
                                </Circle>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* <View>
            <View style={styles.bar}>
            <Text style={styles.barContent}>{greeting}</Text>
            </View>
        </View> */}

            </ImageBackground>

        );
    } else {
        return (

            <View>

                <View style={styles.containerAcross}>
                    <Image source={panda} style={{width: 250, height: 250, position: 'relative'}}/>

                    <Text style={styles.barContent}>{greeting}</Text>
                    
                </View>


                <View style={styles.bar}>
                    <Text style={styles.barContent}>Your Habit</Text>
                    <Text style={styles.title}>Going to chapel</Text>
                    <Text></Text>
                </View>


                {/* <View>
                    <View style={styles.bar}>
                        <Text style={styles.barContent}>{greeting}</Text>
                    </View>
                </View> */}


                <View style={styles.containerAcross}>

                    <View style={styles.corners}>
                        <TouchableOpacity onPress={() => navigation.navigate('Habittrack')}>
                            <Circle>
                                <Text style={styles.title}>Streak</Text>
                                <Text />
                                {/* Using static data until the backend is built to keep track of user data */}
                                <Text style={styles.counter}>2</Text>
                                <Text />
                            </Circle>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.corners}>
                        <TouchableOpacity onPress={() => navigation.navigate('Buddies')}>
                            <Circle>
                                <Text style={styles.title}>Buddies</Text>
                                <Text />
                                <Text style={styles.counter}>6</Text>
                                <Text />
                            </Circle>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>



        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    containerAcross: {
        // flex: 0.4,
        flexDirection: 'row',
    },
    corners: {
        flex: 1,
        alignItems: 'stretch',
        padding: 10,
    },
    counter: {
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    image: {
        flex: 1,
        // resizeMode: 'cover',
        justifyContent: "center",
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    },

    // Bars are used to draw full bars across the screen with information in them. Very similar to cards. 
    bar: {
        backgroundColor: '#ffd698',
        alignItems: 'stretch',

        // opacity: 0.7,
        // marginVertical: 15,
    },
    barContent: {
        marginHorizontal: 18,
        marginVertical: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    }
})