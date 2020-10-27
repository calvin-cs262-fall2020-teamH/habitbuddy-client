import React, { useState, useContext } from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity, FlatList, Image, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import Circle from '../shared/circleCard';
import GlobalState from '../shared/globalVars'

// Written by Andrew Baker
// Date 10.8.20
// Sets up the Home screen to display basic information and app traversal

let LoggedIn = false; //temporary value to represent whether or not the user is logged in

// Multiple possible background images. Haven't decided fully on one yet. Ditching the panda theme.
// const background = { uri: "https://pngimg.com/uploads/bamboo/bamboo_PNG51.png"};
// const background = { uri: "http://pngimg.com/uploads/bamboo/bamboo_PNG29.png" };
// const background = { uri: "https://calvinchimes.org/wp-content/uploads/2017/02/20160822calvin-summer-16-stephennorregaard-91-1498x1000.jpg" };
const background = { uri: "https://calvin.edu/contentAsset/image/091f147d-bb7b-4a3b-b337-e872c7a19c3d/bannerImage/filter/Resize,Jpeg/resize_w/720/jpeg_q/80" };

//Panda image
const panda = { uri: "https://cdn.pixabay.com/photo/2016/10/07/22/12/panda-1722704_640.png"};

export default function Home({ navigation }) {
    // Ripped out of the habittrack screen code. Will probably be discarded, leaving in for now. 
    const [chabit, setChabit] = useState('Current Habit');
    const [nhabit, setNhabit] = useState('New Habit')
    const [state, setState] = useContext(GlobalState);

    var hour = new Date().getHours();
    var greeting = "";

    // Used to discern the time and pick an appropriate greeting. WORKS!

    if (hour < 5) {
        greeting = "Good\nNight";
    } else if (hour < 12) {
        greeting = "Good\nMorning";
    } else if (hour < 17) {
        greeting = "Good Afternoon,\n";
    } else if (hour < 20) {
        greeting = "Good\nEvening";
    } else if (hour < 23) {
        greeting = "Good\nNight";
    } else {
        greeting = "Hello";
    }

    if(!LoggedIn) navigation.navigate('Login');

    var andHome = true;
    // used to pick between two homescreen options. TEMPORARY

    if (andHome) {
        // My primary thoughts and design for the home screen. Several cards with a background. Possibly a couple of bars for greeting and other information. 
        return (

            <ImageBackground source={background} style={styles.image} blurRadius={0.6}>

                <View style={styles.bar}>
                <Text style={styles.barContent}>{greeting}{state.name}</Text>
                </View>

                <View style={styles.container}>
                    {/* The container sets up the columns for the homescreen. Adding a basic view adds additional columns to the row*/}
                    <View style={styles.containerAcross}>
                        {/* The containerAcross creates a system of rows for data and cards. Add a containerAcross view to add an additional row */}
                        <View style={styles.corners}>
                            {/* Top card, for the sought out habit  */}
                            <Card>
                                <Text>Your Habit</Text>
                                {/* Static at the moment. To be changed with back end. TEMPORARY */}
                                <Text style={globalStyles.titleText}>Going to chapel</Text>
                                <Text></Text>
                            </Card>
                            
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
                        </View>
                    </View>

                    {/* TEMP: uses bars to display the habit tracking information.*/}
{/* 
                    <View style={styles.containerAcross}>

                        <View style={styles.container}>

                        <View style={styles.bar}>
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
                        </View>
                        <View style={styles.bar}>
                            <Text style={styles.title}>Habit Tracking</Text>
                        </View>
                        </View>
                    </View> */}

                    {/* Cards used to display the habit tracking/ stacking information. Tracking to be removed for just the tracking screen. */}
                    {/* <View style={styles.containerAcross}>
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
                        <Card>
                            <Text style={styles.title}>Habit Tracking</Text>
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

                {/* Buttons similar to the primary design. */}
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
    // Container for the whole of the app. Creates columns.
    container: {
        flex: 1,
        flexDirection: 'column',
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
        // flex:1,
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 10,
        height: 50,
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        fontStyle: 'italic',
    },
    inputBox: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#777',
        alignSelf: 'stretch',
        fontSize: 12.5,
    },
})