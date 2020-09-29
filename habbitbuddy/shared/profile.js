import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Profile(props) {
    return (
        <View style={styles.profile}>
            <View style={styles.profileContent}>
                { props.children }
            </View>
        </View>
    );
}

const styles = StyleSheet.create ({
    profile: {
        marginHorizontal: 4,
        marginVertical: 6,
    },
    profileContent: {
        marginHorizontal: 18,
        marginVertical: 20,
    }
});
