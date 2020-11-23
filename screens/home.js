import React, { useState, useEffect} from 'react';

import { ImageBackground, StyleSheet, View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, 
    TextInput } from 'react-native';
import {globalStyles, colorCodes} from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import CommonDataManager from '../data/CommonDataManager';

// Written by Andrew Baker
// Date 10.8.20
// Sets up the Home screen to display basic information and app traversal

// Multiple possible background images. Haven't decided fully on one yet. Ditching the panda theme.
// const background = { uri: "https://pngimg.com/uploads/bamboo/bamboo_PNG51.png"};
// const background = { uri: "http://pngimg.com/uploads/bamboo/bamboo_PNG29.png" };
// const background = { uri: "https://calvinchimes.org/wp-content/uploads/2017/02/20160822calvin-summer-16-stephennorregaard-91-1498x1000.jpg" };
// const background = { uri: "https://calvin.edu/contentAsset/image/091f147d-bb7b-4a3b-b337-e872c7a19c3d/bannerImage/filter/Resize,Jpeg/resize_w/720/jpeg_q/80" };
const background = { uri: "https://calvin.edu/contentAsset/image/25cbc0c3-c2c7-438b-8abf-4bd1ebb61d95/featureImage/filter/Jpeg/jpeg_q/80" };

export default function Home({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    let commonData = CommonDataManager.getInstance();

    useEffect(() => {
        fetch('https://habit-buddy.herokuapp.com/home/' + commonData.getUserID()) //Change this once we have local storage of a active user
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    // Ripped out of the habittrack screen code. Will probably be discarded, leaving in for now. 
    const [chabit, setChabit] = useState('Current Habit');
    const [nhabit, setNhabit] = useState('New Habit')

    let hour = new Date().getHours();
    let greeting = "";

    // Used to discern the time and pick an appropriate greeting. WORKS!

    if (hour < 5) {
        greeting = "Good Night,\n";
    } else if (hour < 12) {
        greeting = "Good Morning,\n";
    } else if (hour < 17) {
        greeting = "Good Afternoon,\n";
    } else if (hour < 20) {
        greeting = "Good Evening,\n";
    } else if (hour < 23) {
        greeting = "Good Night,\n";
    } else {
        greeting = "Hello,\n";
    }
    // My primary thoughts and design for the home screen. Several cards with a background. Possibly a couple of bars for greeting and other information. 
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={{ flex: 1 }}>
                <ImageBackground source={background} style={styles.image} blurRadius={2.0}>
                    <View style={styles.bar}>
                        <Text style={styles.barContent}>{greeting}{ data.firstname }</Text>
                    </View>

                    <View style={styles.container}>
                        {/* The container sets up the columns for the homescreen. Adding a basic view adds additional columns to the row*/}
                        <View style={styles.containerAcross}>
                            {/* The containerAcross creates a system of rows for data and cards. Add a containerAcross view to add an additional row */}
                            <View style={styles.corners}>
                                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                                    {/* Top card, for the sought out habit  */}
                                    <Card>
                                        <Text>Your Habit</Text>
                                        {/* Static at the moment. To be changed with back end. TEMPORARY */}
                                        <Text style={globalStyles.cardTitle}>{ data.habit }</Text>
                                        <Text></Text>
                                    </Card>
                                </TouchableOpacity>
                            </View>
                        <View style={styles.corners}>
                            <Card>
                                <View style={{alignItems:'center'}}>
                                    <Text style={{justifyContent:'center', marginHorizontal: -5,}}>Habit Stacking <MaterialIcons name="info-outline" size={20} color='#333' style={globalStyles.leftIcon}
                        /></Text> 
                                    
                                </View>
                                <View style={styles.Hab}>
                                    <Text style={styles.titleText}>After I</Text>
                                        <TextInput   
                                            style={styles.inputBox}
                                            placeholder=' CURRENT HABIT'
                                            onChangeText={(val) => setChabit(val)} />
                                    </View>
                                    <View style={styles.Hab}>
                                        <Text style={styles.titleText}>I will</Text>
                                        <TextInput
                                            style={styles.inputBox}
                                            placeholder=' NEW HABIT'
                                            onChangeText={(val) => setNhabit(val)} />
                                    </View>
                                </Card>
                            </View>
                        </View>

                        {/* Circle cards to create buttons and display number of buddies and the streak of following the habit. */}
                        <View style={styles.containerAcross}>

                            <View style={styles.corners}>
                                <TouchableOpacity onPress={() => navigation.navigate('Habit Tracker')}>
                                    <Card type='circle'>
                                        <Text style={styles.title}>Streak</Text>
                                        <Text />
                                        {/* Using static data until the backend is built to keep track of user data */}
                                        <Text style={styles.counter}>{ data.streak }</Text>
                                        <Text />
                                    </Card>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.corners}>
                                <TouchableOpacity onPress={() => navigation.navigate('Buddies')}>
                                    <Card type='circle'>
                                        <Text style={styles.title}>Buddies</Text>
                                        <Text />
                                        <Text style={styles.counter}>{ data.totalbuddies }</Text>
                                        <Text />
                                    </Card>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    // Container for the whole of the app. Creates columns.
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    // Container for rows within the columns. 
    containerAcross: {
        flex: 0.4,
        flexDirection: 'row',
        alignItems: 'center',
    },
    // Creates 'corners' for within the rows. Essentially creates elements within rows. 
    corners: {
        flex: 1,
        alignItems: 'stretch',
        padding: 10,
    },
    // Font details for the text within the buttons. 
    counter: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colorCodes.cardText,
    },
    // Background image styling details.
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
        color: colorCodes.cardText,
        textAlign: 'center',
    },

    // Bars are used to draw full bars across the screen with information in them. Very similar to cards. 
    bar: {
        backgroundColor: colorCodes.card + 'b2', //rgba color code (a is opacity)
        alignItems: 'stretch',
        //opacity: 0.7,
        // marginVertical: 15,
    },
    barContent: {
        marginHorizontal: 18,
        marginVertical: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: colorCodes.cardText,
        textAlign: 'center',
    },
    Hab:{
        //flex:1,
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 10,
        height: 50,
        justifyContent: 'center'
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colorCodes.cardText,
    },
    inputBox: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#777',
        alignSelf: 'stretch',
        fontSize: 12.5,
        paddingHorizontal: 2,
        color: colorCodes.lightText,
    },
})