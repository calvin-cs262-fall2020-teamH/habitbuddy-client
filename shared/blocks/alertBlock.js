import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { DynamicStyleSheet, useDynamicValue } from 'react-native-dynamic';
import { dyColorCodes } from '../../styles/global'

/** 
 * AlertBlock brings up an alert block when pressed which can have up to three options
 * @author Dawson Buist (Bongo9911)
 * Modified from https://reactnative.dev/docs/alert
 * @param {any} title 
 * @param {any} alertTitle
 * @param {any} alertMsg
 * @param {any} options
 * @return {AlertBlock} Block with text and up to three touchable options
 */
export default function AlertBlock({title, alertTitle, alertMsg, options}) {
    const createAlert = () =>
        Alert.alert(
        alertTitle,
        alertMsg,
        options,
        { cancelable: false }
        );

    const dyStyles = useDynamicValue(styles);

    return (
        <View style={dyStyles.container}>
            <TouchableOpacity onPress= {createAlert} style={dyStyles.block}>
                <View style={dyStyles.containerText}>
                    <Text style={dyStyles.text}>
                        {title}
                    </Text>
                </View>          
            </TouchableOpacity>
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
        height: 55,
        flexDirection: 'row',
        paddingHorizontal: 20,
        backgroundColor: dyColorCodes.front,
    },
    containerIcon: {
        flex: .1,
        paddingVertical: 15,
    },
    containerText: {
        flex: .6,
        paddingVertical: 18,
    },
    containerSelection: {
        flex: .25,
        paddingVertical: 18,
    },
    containerArrow: {
        flex: .05,
        position: "absolute",
        right: 5,
        paddingVertical: 18,
    },
    text: {
        color: 'red',
        fontWeight: 'bold',
    }
});