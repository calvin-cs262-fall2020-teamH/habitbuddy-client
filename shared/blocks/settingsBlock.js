import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { dyColorCodes } from '../../styles/global'
import { DynamicStyleSheet, useDynamicValue } from 'react-native-dynamic';

export default function SettingsBlock({icon, title, selected, page, navigation}) {

    const dyStyles = useDynamicValue(styles);

    return (
        <View style={dyStyles.container}>
            <TouchableOpacity onPress= { //Makes the blocks interactable
                () => navigation.navigate(page, {name: {title}})} style={dyStyles.block}>
                
                <View style={dyStyles.containerIcon}>
                    <Ionicons name={icon} size={24} color={useDynamicValue(dyColorCodes.text)} />                
                </View>
                <View style={dyStyles.containerText}>
                    <Text style={dyStyles.text}>
                        {title}
                    </Text>
                </View>          
                <View style={dyStyles.containerSelection}>
                    <Text style={{textAlign: "right", paddingRight: 15, color: useDynamicValue(dyColorCodes.lightText)}}>
                        {selected}
                    </Text>
                </View>
                <View style={dyStyles.containerArrow}>
                    <Ionicons name="ios-arrow-forward" size={20} color={useDynamicValue(dyColorCodes.text)} />
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
        color: dyColorCodes.text,
    }
});