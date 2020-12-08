import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity, SafeAreaView, } from 'react-native';
import { DynamicStyleSheet, DynamicValue } from 'react-native-dynamic';
import CommonDataManager from '../data/CommonDataManager';
import { dyColorCodes } from '../styles/global';
import BuddiesStreak from '../shared/buddiesStreakCard';


let data;
let lastBlock = true;

export default class HabittrackBlock extends Component {

    //The constructor takes in props passed from outside and sets the default selected days to be none
    constructor(props) {
        super(props);

        //this.data = props.data;
        this.commonData = CommonDataManager.getInstance();
        this.state = {
            lastSelect: '',
            theme: props.theme,
            buddies: props.buddies.sort((a, b) => (a.streak > b.streak) ? 1 : 0),
            hstreak: this.commonData.getStreak(),
            data: props.data,
        };
    }

    
    static getDerivedStateFromProps(nextProps) {
        return {
            theme: nextProps.theme,
            buddies: nextProps.buddies.sort((a, b) => (a.streak > b.streak) ? 1 : 0),
            data: nextProps.data,
        }
    }

    //This function is called when a user taps on one of the days
    onPressAction = (item) => {

        item.select = !item.select;
        this.setState({ lastSelect: (item.day + item.select).toString() });

        let hstreak = 0;

        // Adds streak if each block in a row is selected
        this.data.forEach(element => {
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

        this.commonData.setStreak(this.data);
        console.log("Highest streak: " + hstreak);

        fetch(`http://habit-buddy.herokuapp.com/streak/` + this.commonData.getUserID(), {
            method: 'PUT', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                streak: hstreak
            })
        })
        //.then(response => console.log(response.text()))
        .catch((error) => {
            console.error(error);
        });
    };

    //renderRow renders each row for the selection
    renderRow = (item) => {
        const dyStyles = styles[this.state.theme];
        const isSelected = item.select; //checks if the rendering item is selected
        //console.log(`Rendered item - ${item.day} for ${isSelected}`); //logs what is selected
        //console.log(`Highest Streak- ${hstreak}`); //logs highest streak
        //change background color depending on whether the day is selected or not
        const bgColor = item.select ? {backgroundColor: selectedBlock[this.state.theme] } 
        : {backgroundColor: unselectedBlock[this.state.theme]};

        return (
            // Creates a cell for each day
            <TouchableOpacity onPress={() => this.onPressAction(item)}>
                <View style={[bgColor, dyStyles.cell]}>
                    <Text style={dyStyles.text}>{item.day}</Text>
                </View>
            </TouchableOpacity>

        );
    }

    render() {
        const dyStyles = styles[this.state.theme];

        return (
            //takes the data passed in and renders each item in the list using renderRow
            <SafeAreaView style={dyStyles.container}>
                <View style={{ flex: 1, borderRadius: 5, alignItems: 'center', justifyContent: 'center', borderBottomWidth: 0.5, borderBottomColor: 'gray', shadowRadius: 5 }}>
                    <FlatList
                        data={this.state.data}
                        renderItem={({ item }) => (
                            this.renderRow(item)
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal={false}
                        numColumns={7}
                        columnWrapperStyle={{ marginTop: 10 }}
                        width={'100%'}
                        scrollEnabled={false}
                    />
                </View>

                {/* This is for the Daily Streak Board */}
            <View style={dyStyles.streakBoardContainer}>
                {/* Daily Streak Board Title */}
                <View style={dyStyles.streakBoardTitle}>
                    <Text style={dyStyles.text}>Daily Streak Board</Text>
                </View>

                {/* My streak container */}
                <View style={dyStyles.myStreakContainer}>
                    <Text style={[dyStyles.cardText, { fontWeight: 'bold' }]}>My Streak </Text>
                    <Text style={[dyStyles.cardStreak, { fontWeight: 'bold' }]}>{ this.commonData.getStreak() }</Text>
                </View>

                {/* Buddies' streak container, uses BuddiesStreak card for each buddy */}
                <View style={dyStyles.buddiesStreakContainer}>
                    <FlatList data={this.state.buddies} 
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity>
                            {/* Allows for traversal into the buddy details page */}
                            <BuddiesStreak>
                                <Text style={dyStyles.text}>
                                    {item.firstname} {item.lastname}
                                </Text>
                                <Text style={dyStyles.streak}>
                                    {item.streak}
                                </Text>
                            </BuddiesStreak>
                        </TouchableOpacity>
                    )} />
                </View>
            </View>
            </SafeAreaView>

            
        );
    }
}

const unselectedBlock = new DynamicValue('#D3D3D3', '#535353')
const selectedBlock = new DynamicValue('#ffd699', '#cc7a00')

const styles = new DynamicStyleSheet({
    cell: {
        height: 40,
        width: 40,
        margin: 5,
        marginTop: -1,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

    },
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: dyColorCodes.back
    },
    streakBoardContainer: {
        flex: 6,
        backgroundColor: dyColorCodes.frontCard,
        paddingHorizontal: 7,
        marginTop: 20,
        marginHorizontal: 7,
        borderRadius: 5,
        height: 50
    },
    streakBoardTitle: {
        flex: 1.5,
        paddingHorizontal: 7,
        paddingVertical: 5,
        alignItems: 'center',
        borderRadius: 10,
        justifyContent: 'center'
    },
    myStreakContainer: {
        flex: 1,
        margin: 3,
        paddingHorizontal: 10,
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: '#ffd699',
        justifyContent: 'center'
    },
    buddiesStreakContainer: {
        flex: 8,
        paddingBottom: 15,
        borderRadius: 5,
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: dyColorCodes.text,
    },
    text: {
        fontSize: 15,
        color: dyColorCodes.text,
    },
    cardText: {
        fontSize: 15,
        color: dyColorCodes.cardText,
    },
    namePlacement: {
        flexDirection: 'row',
        flex: 1,
    },
    streak: {
        textAlign: "right",
        marginLeft: 'auto',
        alignItems: 'flex-end',
        color: dyColorCodes.text,
    },
    cardStreak: {
        textAlign: "right",
        marginLeft: 'auto',
        alignItems: 'flex-end'
    }
}); 