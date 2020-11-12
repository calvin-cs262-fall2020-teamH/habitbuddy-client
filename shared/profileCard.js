import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colorCodes, dyColorCodes } from '../styles/global'
import { DynamicStyleSheet, useDynamicValue } from 'react-native-dynamic';

export default function ProfileCard({icon, title, userInfo, page, navigation}) {

    const dyStyles = useDynamicValue(styles)

    return (
        <View style={dyStyles.container}>
                <View style={dyStyles.containerText}>
                    <Text style={dyStyles.text}>
                        {title}
                    </Text>
                </View>
                <View style={dyStyles.containerSelection}>
                    <Text style={dyStyles.selectedText}>
                        {userInfo}
                    </Text>
                </View>
        </View>
    );
};
const styles = new DynamicStyleSheet({
    block: {
        flexDirection: 'row',
        flexBasis: '100%',
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 15,
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    containerText: {
        flex: .3,
        paddingVertical: 3,
        paddingLeft: 20,
    },
    containerSelection: {
        flex: .7,
        paddingVertical: 3,
    },
    text: {
        color: dyColorCodes.text,
    },
    selectedText: {
        textAlign: "right",
        paddingRight: 17,
        color: dyColorCodes.lightText,
    },
});