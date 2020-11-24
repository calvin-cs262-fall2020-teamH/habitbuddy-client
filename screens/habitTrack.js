import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import HabitTrackBlock from '../shared/habitTrackBlock';
import BuddiesStreak from '../shared/buddiesStreakCard';
import { DynamicStyleSheet, useDynamicValue, useColorSchemeContext} from 'react-native-dynamic';
import { dyColorCodes } from '../styles/global';

export default function HabitTrack({ navigation }) {
    const dyStyles = useDynamicValue(styles);
    const mode = useColorSchemeContext();
    const lastMode = '';

    const habitblockElement = React.createRef();

    mode === lastMode ? () => { habitblockElement.current.changeTheme(mode); lastMode = mode; } : {};
    
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
        <View style={dyStyles.container}>
            <Text style={[dyStyles.text, { marginVertical: 3, alignSelf: 'center' }]}>My Week</Text>

            {/* This block is for the 7 blocks representing a week */}
            <HabitTrackBlock
                ref = {habitblockElement}
                data={[
                    { day: 'S', select: false, key: '1' },
                    { day: 'M', select: false, key: '2' },
                    { day: 'T', select: false, key: '3' },
                    { day: 'W', select: false, key: '4' },
                    { day: 'Th', select: false, key: '5' },
                    { day: 'F', select: false, key: '6' },
                    { day: 'S', select: false, key: '7' },
                
                ]}
                theme = {mode}
            ></HabitTrackBlock>

            {/* This is for the Daily Streak Board */}
            <View style={dyStyles.streakBoardContainer}>
                
                {/* Daily Streak Board Title */}
                <View style={dyStyles.streakBoardTitle}>
                    <Text style={dyStyles.text}>Daily Streak Board</Text>
                </View>

                {/* My streak container */}
                <View style={dyStyles.myStreakContainer}>
                    <Text style={[dyStyles.text, { fontWeight: 'bold' }]}>My Streak </Text>
                    <Text style={[dyStyles.streak, { fontWeight: 'bold' }]}>0</Text>
                </View>

                {/* Buddies' streak container, uses BuddiesStreak card for each buddy */}
                <View style={dyStyles.buddiesStreakContainer}>
                    <FlatList data={buddies} renderItem={({ item }) => (
                        <TouchableOpacity>
                            {/* Allows for traversal into the buddy details page */}
                            <BuddiesStreak>
                                <Text style={dyStyles.text}>
                                    {item.name}
                                </Text>
                                <Text style={dyStyles.streak}>
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

const styles = new DynamicStyleSheet({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: dyColorCodes.back 
    },
    streakBoardContainer:{ 
        flex: 6, 
        backgroundColor: '#D3D3D3', 
        paddingHorizontal: 7, 
        marginTop: 20, 
        marginHorizontal: 7, 
        borderRadius: 5, 
        height: 50 
    },
    streakBoardTitle:{
        flex: 1.5, 
        paddingHorizontal: 7, 
        paddingVertical: 5, 
        alignItems: 'center', 
        borderRadius: 10, 
        justifyContent: 'center' 
    },
    myStreakContainer:{
        flex: 1, 
        margin: 3, 
        paddingHorizontal: 10, 
        alignItems: 'center', 
        flexDirection: 'row', 
        borderRadius: 5, 
        backgroundColor: '#ffd699', 
        justifyContent: 'center' 
    },
    buddiesStreakContainer:{
        flex: 8, 
        paddingBottom: 15, 
        borderRadius: 5, 
        alignItems: 'stretch', 
        justifyContent: 'center'
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: dyColorCodes.text,
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