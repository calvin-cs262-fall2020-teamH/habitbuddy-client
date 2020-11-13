import React, { useState, useContext } from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity, FlatList, Image, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import Circle from '../shared/circleCard';
import GlobalState from '../shared/globalVars';
import { MaterialIcons } from '@expo/vector-icons';

// Written by Andrew Baker
// Date 10.8.20
// Sets up the Home screen to display basic information and app traversal

let LoggedIn = false; //temporary value to represent whether or not the user is logged in

const background = { uri: "https://calvin.edu/contentAsset/image/091f147d-bb7b-4a3b-b337-e872c7a19c3d/bannerImage/filter/Resize,Jpeg/resize_w/720/jpeg_q/80" };

export default function Home({ navigation }) {
    // Ripped out of the habittrack screen code. Will probably be discarded, leaving in for now. 
    const [chabit, setChabit] = useState('Current Habit');
    const [nhabit, setNhabit] = useState('New Habit')
    const [state, setState] = useContext(GlobalState);

    var hour = new Date().getHours();
    var greeting = "";

    // Used to discern the time and pick an appropriate greeting. WORKS!

    if (hour < 5) {
        greeting = "Good Night!";
    } else if (hour < 12) {
        greeting = "Good Morning!";
    } else if (hour < 17) {
        greeting = "Good Afternoon!,\n";
    } else if (hour < 20) {
        greeting = "Good Evening!";
    } else if (hour < 23) {
        greeting = "Good Night!";
    } else {
        greeting = "Hello!";
    }

    //if(!LoggedIn) navigation.navigate('Login');


        // My primary thoughts and design for the home screen. Several cards with a background. Possibly a couple of bars for greeting and other information. 
    return (
        <ImageBackground source={background} style={styles.image} blurRadius={0.6}>

            <View style={styles.bar}>
                <Text style={styles.barContent}>{greeting}</Text>
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
                                    <Text style={globalStyles.titleText}>Going to chapel</Text>
                                    <Text></Text>
                            </Card>
                            </TouchableOpacity>
                            
                        </View>
                        <View style={styles.corners}>
                            <Card>
                                <View style={{alignItems:'center'}}>
                                    <Text style={{justifyContent:'center'}}>Habit Stacking <MaterialIcons name="info-outline" size={20} color='#333' style={globalStyles.leftIcon}
                        
                        /></Text> 
                                    
                                </View>
                                <View style={styles.Hab}>
                                    <Text style={styles.titleText}>After I</Text>
                                        <TextInput   
                                            style={styles.inputBox}
                                            placeholder=' CURRENT HABIT'
                                            onChangeText={(val) => setChabit(val)}/>
                                </View>
                                <View style={styles.Hab}>
                                    <Text style={styles.titleText}>I will</Text>
                                        <TextInput   
                                            style={styles.inputBox}
                                            placeholder=' NEW HABIT'
                                            onChangeText={(val) => setChabit(val)}/>
                                </View>
                            </Card>
                        </View>
                    </View>
                    <View style={styles.corners}>
                        <Card>
                            <View style={styles.Hab}>
                                <Text style={styles.titleText}>After I</Text>
                                    <TextInput   
                                        style={styles.inputBox}
                                        placeholder=' CURRENT HABIT'
                                        onChangeText={(val) => setChabit(val)}/>
                            </View>
                            <View style={styles.Hab}>
                                <Text style={styles.titleText}>I will</Text>
                                    <TextInput   
                                        style={styles.inputBox}
                                        placeholder=' NEW HABIT'
                                        onChangeText={(val) => setChabit(val)}/>
                            </View>
                        </Card>
                    </View> */}

                    {/* Circle cards to create buttons and display number of buddies and the streak of following the habit. */}
                    <View style={styles.containerAcross}>

                        <View style={styles.corners}>
                            <TouchableOpacity onPress={() => navigation.navigate('Habittrack')}>
                                <Circle>
                                    <Text style={styles.title}>Streak</Text>
                                    <Text />
                                    {/* Using static data until the backend is built to keep track of user data */}
                                    <Text style={styles.counter}>20</Text>
                                    <Text />
                                </Circle>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.corners}>
                            <TouchableOpacity onPress={() => {
                                setState(state => ({...state, name: 'bruh'}), () => {console.log(state.name);});
                                navigation.navigate('Buddies')
                            }}>
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
            </ImageBackground>

        );
    } else {
        // Secondary design. TEMPORARY.
        return (

            <View style={styles.container}>
                {/* Displays the panda art and and the bar with the habit information. */}
                <View style={styles.containerAcross}>
                    <Image source={panda} style={{width: 275, height: 275, position: 'relative'}}/>
                    <View style={styles.container}>
                        <Text style={{paddingBottom: 120}}/>
                        <Text style={ styles.counter }>{greeting}</Text>
                    </View>
                </View>

                {/* Circle cards to create buttons and display number of buddies and the streak of following the habit. */}
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
                        <TouchableOpacity onPress={() => {
                                setState(state => ({...state, name: 'bruh'}), () => {console.log(state.name);});
                                navigation.navigate('Buddies')
                            }}>
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
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    // Container for the whole of the app. Creates columns.
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
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
        color: '#333',
        textAlign: 'center',
    },

    // Bars are used to draw full bars across the screen with information in them. Very similar to cards. 
    bar: {
        backgroundColor: '#ffd698b2', //rgba color code (a is opacity)
        alignItems: 'stretch',

        //opacity: 0.7,
        // marginVertical: 15,
    },
    barContent: {
        marginHorizontal: 18,
        marginVertical: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
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
        color: '#333',
    },
    inputBox: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#777',
        alignSelf: 'stretch',
        fontSize: 12.5,
        paddingHorizontal: 2,
    },
})