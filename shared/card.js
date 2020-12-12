import React from 'react';
import { colorCodes, dyColorCodes } from '../styles/global';
import { View } from 'react-native';
import { DynamicStyleSheet, useDynamicValue } from 'react-native-dynamic';

/**
 * Card constructs different styles of cards 
 * @author Andrew Baker (andrewJamesBaker)
 * @param {any} props
 * @return {View} card content for either circle or regular card
 */
export default function Card(props) {
    const dyStyles = useDynamicValue(styles);

    return (
        //props.style allows you to pass in custom styles
        <View style={[(props.type === 'circle' ? dyStyles.circleCard : dyStyles.card), props.style]}> 
            <View style={dyStyles.cardContent}>
                { props.children }
            </View>
        </View>
    );
}

const styles = new DynamicStyleSheet ({
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: dyColorCodes.card,                 //#ffd699 is a light orange color
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        
    },
    circleCard: {
        borderRadius: 75,
        backgroundColor: colorCodes.card,                 //#ffd699 is a light orange color
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        marginHorizontal: 4,
        marginVertical: 6,
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 20,
        justifyContent:'center'
    }
});
