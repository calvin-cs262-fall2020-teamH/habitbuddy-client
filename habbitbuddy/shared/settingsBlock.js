import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { colorCodes } from '../styles/global'

export default function SettingsBlock({icon, title, selected, page, navigation}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress= {
                () => navigation.navigate(page, {name: {title}})} style={{flex: 1, flexDirection: 'row',}
            }>
                <View style={styles.containerIcon}>
                    <Ionicons name={icon} size={'2em'} color={colorCodes.text} />                
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
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 20,
        height: '10%',
        backgroundColor: colorCodes.front,
    },
    containerIcon: {
        flex: .1,
        flexDirection: 'column',
    },
    containerText: {
        flex: .6,
        flexDirection: 'column',
        paddingVertical: '.5em',
    },
    containerSelection: {
        flex: .25,
        flexDirection: 'column',
        paddingVertical: 2,
    },
    containerArrow: {
        flex: .05,
        position: "absolute",
        right: 5,
    },
    text: {
        color: colorCodes.text,
        fontSize: '1em'
    }
});