import React, {useState} from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {colorCodes} from '../../styles/global'

//Sample switch code taken and modified from https://reactnative.dev/docs/switch.html
export default function SwitchBlock({ icon, title, }) {
    const [isEnabled, setIsEnabled] = useState(true); //sets the switch to be enabled by default
    const toggleSwitch = () => setIsEnabled(previousState => !previousState); //flips the switch state

    return (
        <View style={styles.container}>
            <View style={styles.containerIcon}>
                <Ionicons name={icon} size={24} color={colorCodes.text} />
            </View>
            <View style={styles.containerText}>
                <Text style={styles.text}>
                    {title}
                </Text>
            </View>
            <View style={styles.containerArrow}>
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
        flex: .8,
        paddingVertical: 18,
    },
    containerArrow: {
        flex: .1,
        position: "absolute",
        right: 20,
        paddingVertical: 18,
    },
    text: {
        color: colorCodes.text,
    }
});