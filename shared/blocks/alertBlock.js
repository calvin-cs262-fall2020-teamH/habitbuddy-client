import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colorCodes} from '../../styles/global'

//code modified from https://reactnative.dev/docs/alert

//Alert Block brings up an alert block when pressed which can have up to 3 options
export default function AlertBlock({title, alertTitle, alertMsg, options}) {

    const createAlert = () =>
        Alert.alert(
        alertTitle,
        alertMsg,
        options,
        { cancelable: false }
        );

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress= {createAlert} style={styles.block}>
                <View style={styles.containerText}>
                    <Text style={styles.text}>
                        {title}
                    </Text>
                </View>          
            </TouchableOpacity>
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
        height: 55,
        flexDirection: 'row',
        paddingHorizontal: 20,
        backgroundColor: colorCodes.front,
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