import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 


export default function SettingsBlock({icon, title, selected, page, navigation}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress= {
                () => navigation.navigate(page, {name: {title}})} style={{flex: 1, flexDirection: 'row',}
            }>
                <View style={styles.containerIcon}>
                    <Ionicons name={icon} size={24} color="black" />                
                </View>
                <View style={styles.containerText}>
                    <Text>
                        {title}
                    </Text>
                </View>
                <View style={styles.containerSelction}>
                    <Text style={{textAlign: "right", paddingRight: 15, color: 'gray'}}>
                        {selected}
                    </Text>
                </View>
                <View style={styles.containerArrow}>
                    <Ionicons name="ios-arrow-forward" size={20} color="gray" styles={styles.arrow}/>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    blockStack: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    container: {
        flex: .05,
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    containerIcon: {
        flex: .1,
        flexDirection: 'column'
    },
    containerText: {
        flex: .6,
        flexDirection: 'column',
        paddingVertical: 2,
    },
    containerSelction: {
        flex: .25,
        flexDirection: 'column',
        paddingVertical: 2,
    },
    containerArrow: {
        flex: .05,
        position: "absolute",
        right: 5,
    },
});