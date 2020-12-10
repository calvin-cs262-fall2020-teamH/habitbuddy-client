import React from 'react';
import { View, Text, TextInput, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { dyColorCodes } from '../styles/global'
import { DynamicStyleSheet, useDynamicValue } from 'react-native-dynamic';

export default function EditProfileCard({ icon, title, placeholder, keyboardType, change }) {

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
            <View style={dyStyles.containerSelection}>
                <TextInput
                    style={dyStyles.textInput}
                    placeholderTextColor = { useDynamicValue(dyColorCodes.lightText) }
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    onChangeText={(val) => change(val)}
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
        height: 60,
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 0,
    },
    containerText: {
        flex: .3,
        paddingVertical: 3,
        paddingLeft: 20,
    },
    containerSelection: {
        flex: .7,
        paddingVertical: 3,
    },
    text: {
        color: dyColorCodes.text,
    },
    textInput: {
        textAlign: "right",
        paddingRight: 17,
        color: dyColorCodes.selected,
    },
});