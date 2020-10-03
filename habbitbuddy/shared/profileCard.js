import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function ProfileCard(props) {
    return (
        <View style={styles.card}>
            <View style={styles.cardTitle}>
                { props.children }
            </View>
            <View style={styles.cardContent}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create ({
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#ffffff',
        borderWidth: 2,
        backgroundColor: '#ffd699',
        borderColor: 'orange',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 7,
        marginVertical: 9,
    },
    cardTitle: {
        marginHorizontal: 4,
        marginVertical: 4,
    }
});
