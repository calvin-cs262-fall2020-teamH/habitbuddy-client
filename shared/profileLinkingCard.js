import React from 'react';
import { View, Text, } from 'react-native';
import { dyColorCodes } from '../styles/global'
import { DynamicStyleSheet, useDynamicValue } from 'react-native-dynamic';

/**
 * ProfileLinkingCard constructs cards used for email and phone number on the Profile screen
 * @author Dawson Buist (Bongo9911) and Joe Pastucha (JoePastucha)
 * @param {any} title
 * @param {any} userInfo
 * @return {Text} linked text for email and phone number to open messaging applications
 */
export default function ProfileLinkingCard({ title, userInfo }) {
    const dyStyles = new useDynamicValue(styles);

    return (
        <View style={dyStyles.container}>
            <View style={dyStyles.containerText}>
                <Text style={dyStyles.text}>
                    {title}
                </Text>
            </View>
            <View style={dyStyles.containerSelection}>
                <Text style={dyStyles.linkText}>
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
        textDecorationLine: 'underline'
    },
    containerSelection: {
        flex: .7,
        paddingVertical: 3,
    },
    text: {
        color: dyColorCodes.text,
    },
    linkText: {
        textAlign: "right",
        paddingRight: 17,
        textDecorationLine: 'underline',
        color: dyColorCodes.link
    }
});