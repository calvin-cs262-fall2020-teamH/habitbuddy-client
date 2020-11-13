import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colorCodes} from '../styles/global'

export default function ProfileLinkingCard({title, userInfo}) {
    return (
        <View style={styles.container}>
            <View style={styles.containerText}>
                <Text style={styles.text}>
                    {title}
                </Text>
            </View>
            <View style={styles.containerSelection}>
                <Text style={{textAlign: "right", paddingRight: 17, textDecorationLine: 'underline', color: 'blue'}}>
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
        color: colorCodes.text,
    }
});