import { TextareaAutosize } from '@material-ui/core';
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView, } from 'react-native';
import BuddiesStreak from '../shared/buddiesStreakCard';
import { globalStyles } from '../styles/global';

let data;
let streak = 0;
let hstreak = 0;
let lastBlock = false;

let buddies = [

    // Basic static user data, used until backend is developed.
    { name: 'Andrew Baker', streak: '4', key: '1' },
    { name: 'Dawson Buist', streak: '6', key: '2' },
    { name: 'Kelsey Yen', streak: '10', key: '3' },
    { name: 'Belina Sainju', streak: '15', key: '4' },
    { name: 'Joe Pastucha', streak: '60', key: '5' },
    { name: 'Nathan Strain', streak: '90', key: '6' },

];

export default class HabittrackBlock extends Component {



    //The constructor takes in props passed from outside and sets the default selected days to be none
    constructor(props) {
        super(props);

        data = props.data;
        this.state = {
            lastSelect: '',
        };
    }

    //This function is called when a user taps on one of the days
    onPressAction = (item) => {

        item.select = !item.select;
        this.setState({ lastSelect: (item.day + item.select).toString() });
        if (!this.props.data[0].select) {
            hstreak = 0;
        }
        this.props.data.forEach(element => {
            if (element.select) {
                if (!lastBlock) {
                    hstreak = 1;
                }
                else {
                    hstreak += 1;
                }
            }
            lastBlock = element.select;
        });

    };

    //renderRow renders each row for the selection
    renderRow = (item) => {
        const isSelected = item.select; //checks if the rendering item is selected
        console.log(`Rendered item - ${item.day} for ${isSelected} ${streak}`); //logs what is selected
        // if (item.select) {
        //     streak = streak + 1;
        //     hstreak = streak; //let the hstreak(highest streak) be the final streak
        // } else {
        //     streak = 0;
        // }
        console.log(`Highest Streak- ${hstreak}`);
        //change background color depending on whether the day is selected or not
        const bgColor = item.select ? { backgroundColor: "#ffd699" } : { backgroundColor: "#D3D3D3" };

        return (
            <TouchableOpacity onPress={() => this.onPressAction(item)}>
                <View style={[bgColor, styles.cell]}>
                    <Text style={styles.text}>{item.day}</Text>
                </View>
            </TouchableOpacity>

        );
    }

    render() {
        return (
            //takes the data passed in and renders each item in the list using renderRow
            <SafeAreaView style={styles.container}>
                <View style={{flex:7}}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            this.renderRow(item)
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal={false}
                        numColumns={7}
                        columnWrapperStyle={{ marginTop: 10 }}
                        width={'100%'}
                    />
                </View>
                
                <View style={{ flex: 1.5, marginTop:10, borderColor: 'gray', borderWidth: 2, marginBottom:10, borderRadius: 5, backgroundColor: '#ffd699', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={globalStyles.titleText}>My Streak: <Text style={[globalStyles.titleText, globalStyles.streak]}>{hstreak}</Text></Text>
                </View>
                <View style={{ flex: 6, backgroundColor: '#D3D3D3', borderRadius: 5, borderColor: 'gray', borderWidth: 2, height: 50 }}>
                    <View style={{ flex: 4.5, borderRadius: 10, paddingLeft: 5, paddingRight: 5 }}>
                        <View style={{ flex: 1.5, alignItems: 'center', borderRadius: 10, justifyContent: 'center' }}>
                            <Text style={styles.text}>Buddies</Text>
                        </View>
                        <View style={{ flex: 4.5, paddingBottom: 15, borderRadius: 5, alignItems: 'stretch', justifyContent: 'center' }}>
                            <FlatList data={buddies} renderItem={({ item }) => (
                                <TouchableOpacity>
                                    {/* Allows for traversal into the buddy details page */}
                                    <BuddiesStreak>
                                        {/* image width and height 50 by 50. position absolute to keep picture and text in the same line. basic user profile */}
                                        <Text style={globalStyles.buddiesStreakNameText}>{item.name}{item.streak}</Text>

                                    </BuddiesStreak>
                                </TouchableOpacity>
                            )} />
                        </View>

                    </View>

                </View>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    cell: {
        height: 40,
        width: 40,
        margin: 5,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        fontSize: 15,
        color: '#333',
    },
}); 
