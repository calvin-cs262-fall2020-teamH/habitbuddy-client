import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { dyColorCodes } from '../../styles/global'
import { DynamicStyleSheet, useDynamicValue } from 'react-native-dynamic';

/** 
 * SelectionBlock brings up an alert block when pressed which can have up to three options
 * @author Dawson Buist (Bongo9911)
 * Modified from https://reactnative.dev/docs/switch.html
 * @param {any} icon
 * @param {any} title
 * @return {SwitchBlock} Block with a "flippable" switch
 */
export default function SwitchBlock({ icon, title }) {
    const [isEnabled, setIsEnabled] = useState(true); //sets the switch to be enabled by default
    const toggleSwitch = () => setIsEnabled(previousState => !previousState); //flips the switch state

    const dyStyles = useDynamicValue(styles);

    return (
        <View style={dyStyles.container}>
            <View style={dyStyles.containerIcon}>
                <Ionicons name={icon} size={24} color={useDynamicValue(dyColorCodes.text)} />
            </View>
            <View style={dyStyles.containerText}>
                <Text style={dyStyles.text}>
                    {title}
                </Text>
            </View>
            <View style={dyStyles.containerArrow}>
                <Switch //renders a switch which gets flipped when tapped
                    trackColor={{ false: "#767577", true: "#5be531" }} //changes background color
                    thumbColor="#f4f3f4" //sets the color of the actual switch
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch} //runs toggleSwitch when the switch is flipped
                    value={isEnabled} //used the isEnabled value to determine whether its on or off
                />
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
        flex: .8,
        paddingVertical: 18,
    },
    containerArrow: {
        flex: .1,
        position: "absolute",
        right: 20,
        paddingVertical: 12,
    },
    text: {
        color: dyColorCodes.text,
    }
});