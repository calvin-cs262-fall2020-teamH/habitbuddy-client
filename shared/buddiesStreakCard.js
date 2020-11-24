import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function BuddiesStreak(props, {styling}) {
    return (
        <View style={[styles.card, styling]}>
            <View style={styles.cardContent}>
                { props.children }
            </View>
        </View>
    );
}

const styles = StyleSheet.create ({
    card: {
        borderRadius: 5,
        elevation: 2,
        backgroundColor: 'white',                 //#ffd699 is a light orange color
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