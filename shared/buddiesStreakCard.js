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
        //shadowOffset: {width: 1, height: 1},
        //shadowColor: '#333',
        //shadowOpacity: 0.3,
        //shadowRadius: 2,
        //marginHorizontal: 4,
        //marginVertical: 6,
        height:40,
        margin:3
        
    },
    cardContent: {
        // marginHorizontal: 18,
        // marginVertical: 20,
        padding: 10,
        justifyContent:'center'        
    }
});
