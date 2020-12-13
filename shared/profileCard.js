import React from 'react';
import { View, Text, } from 'react-native';
import { dyColorCodes } from '../styles/global'
import { DynamicStyleSheet, useDynamicValue } from 'react-native-dynamic';

/**
 * ProfileCard constructs cards used on Profile screen
 * @param {any} title
 * @param {any} userInfo
 * @return {Text} text for profile info
 */
export default function ProfileCard({ title, userInfo }) {
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