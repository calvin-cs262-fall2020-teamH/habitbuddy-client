import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { colorCodes } from '../styles/global'

export default function SettingsBlock({icon, title, selected, page, navigation}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress= { //Makes the blocks interactable
                () => navigation.navigate(page, {name: {title}})} style={styles.block}>
                
                <View style={styles.containerIcon}>
                    <Ionicons name={icon} size={24} color={colorCodes.text} />                
                </View>
                <View style={styles.containerText}>
                    <Text style={styles.text}>
                        {title}
                    </Text>
                </View>          
                <View style={styles.containerSelection}>
                    <Text style={{textAlign: "right", paddingRight: 15, color: colorCodes.selected}}>
                        {selected}
                    </Text>
                </View>
                <View style={styles.containerArrow}>
                    <Ionicons name="ios-arrow-forward" size={20} color={colorCodes.selected} styles={styles.arrow}/>
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
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: colorCodes.front,
    },
    containerIcon: {
        flex: .1,
    },
    containerText: {
        flex: .6,
        paddingVertical: 3,
    },
    containerSelection: {
        flex: .25,
        paddingVertical: 3,
    },
    containerArrow: {
        flex: .05,
        position: "absolute",
        right: 5,
        paddingVertical: 3,
    },
    text: {
        color: colorCodes.text,
    }
});