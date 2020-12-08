import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import HabitTrackBlock from '../shared/habitTrackBlock';
import BuddiesStreak from '../shared/buddiesStreakCard';
import { DynamicStyleSheet, useDynamicValue, useColorSchemeContext } from 'react-native-dynamic';
import { dyColorCodes } from '../styles/global';
import CommonDataManager from '../data/CommonDataManager';
import { common } from '@material-ui/core/colors';

export default function HabitTrack({ navigation }) {
    const dyStyles = useDynamicValue(styles);
    const mode = useColorSchemeContext();
    const lastMode = '';

    const habitblockElement = React.createRef();

    const [buddies, setBuddies] = useState([]);
    const [isLoading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch('https://habit-buddy.herokuapp.com/streak/' + commonData.getUserID())                                           // Web service will be entered once we have it fully available.
          .then((response) => response.json())
          .then((json) => setBuddies(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);

    const commonData = CommonDataManager.getInstance();
    const data = commonData.getStreakWeek();

    mode === lastMode ? () => { habitblockElement.current.changeTheme(mode); lastMode = mode; } : {};

    return (
        <View style={dyStyles.container}>
            <Text style={[dyStyles.text, { marginVertical: 3, alignSelf: 'center', fontWeight: 'bold' }]}>My Week</Text>
            <Text style={[dyStyles.text, { marginVertical: 3, alignSelf: 'center' }]}>Tap the day to log your progress</Text>

            {/* This block is for the 7 blocks representing a week */}
            <HabitTrackBlock
                ref={habitblockElement}
                // data={[
                //     { day: 'S', select: false, key: '1' },
                //     { day: 'M', select: false, key: '2' },
                //     { day: 'T', select: false, key: '3' },
                //     { day: 'W', select: false, key: '4' },
                //     { day: 'Th', select: false, key: '5' },
                //     { day: 'F', select: false, key: '6' },
                //     { day: 'S', select: false, key: '7' },

                // ]}
                data = {data}
                theme={mode}
                buddies = {buddies}

            ></HabitTrackBlock>
        </View>
    );
}

const styles = new DynamicStyleSheet({
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