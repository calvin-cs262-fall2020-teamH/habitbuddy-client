import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colorCodes } from '../styles/global'

export default function ProfileCard({icon, title, userInfo, page, navigation}) {
    return (
        <View style={styles.container}>
                <View style={styles.containerText}>
                    <Text style={styles.text}>
                        {title}
                    </Text>
                </View>
                <View style={styles.containerSelection}>
                    <Text style={{textAlign: "right", paddingRight: 17, color: colorCodes.selected}}>
                        {userInfo}
                    </Text>
                </View>

        </View>
    );
};
const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        flexBasis: '100%',
    },
    container: {
        display: 'flex',
        height: 60,
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 0,

    },
    containerText: {
        flex: .2,
        paddingVertical: 3,
        paddingLeft: 20,
    },
    containerSelection: {
        flex: .8,
        paddingVertical: 3,
    },
    text: {
        color: colorCodes.text,
    }
});