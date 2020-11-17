import React from 'react';
import { StyleSheet, View } from 'react-native';

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
        borderRadius: 500,
        elevation: 3,
        backgroundColor: '#ffd699',                 //#ffd699 is a light orange color
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