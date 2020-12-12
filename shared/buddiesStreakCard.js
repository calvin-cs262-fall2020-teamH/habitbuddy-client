import React from 'react';
import { View } from 'react-native';
import { DynamicStyleSheet, useDynamicValue } from 'react-native-dynamic';
import { dyColorCodes } from '../styles/global';

/** 
 * AlertBlock brings up an alert block when pressed which can have up to three options
 * @param {any} prop 
 * @param {any} styles
 * @return {Card} Card with Habit Tracker streaks of buddies
 */
export default function BuddiesStreak(props, {styling}) {
    const dystyles = useDynamicValue(styles);

    return (
        <View style={[dystyles.card, styling]}>
            <View style={dystyles.cardContent}>
                { props.children }
            </View>
        </View>
    );
}

const styles = new DynamicStyleSheet({
    card: {
        borderRadius: 5,
        elevation: 2,
        backgroundColor: dyColorCodes.simpleCard,                 //#ffd699 is a light orange color
        height:40,
        margin:3
        
    },
    cardContent: {
        padding: 10,
        justifyContent:'center',
        flex:1,
        flexDirection: 'row'  
    }
});