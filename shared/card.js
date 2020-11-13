import React from 'react';
import { colorCodes } from '../styles/global';
import {StyleSheet, View} from 'react-native';

export default function Card(props) {
    return (
        //props.style allows you to pass in custom styles
        <View style={[styles.card, props.style]}> 
            <View style={styles.cardContent}>
                { props.children }
            </View>
        </View>
    );
}

const styles = StyleSheet.create ({
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: colorCodes.card,                 //#ffd699 is a light orange color
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 20,
        justifyContent:'center'
    }
});
