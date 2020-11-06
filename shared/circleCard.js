import { withTheme } from '@material-ui/core';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colorCodes } from '../styles/global';

export default function Circle(props) {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                { props.children }
            </View>
        </View>
    );
}

const styles = StyleSheet.create ({
    card: {
        borderRadius: 75,
        elevation: 3,
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
    }
});