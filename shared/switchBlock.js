import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { colorCodes } from '../styles/global'

export default function SwitchBlock({icon, title, selected, page, navigation}) {
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
                <View style={styles.containerArrow}>
                    <Switch
                        trackColor={{ false: "#767577", true: "#5be531" }}
                        thumbColor="#f4f3f4"
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
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
        color: colorCodes.text,
    }
});