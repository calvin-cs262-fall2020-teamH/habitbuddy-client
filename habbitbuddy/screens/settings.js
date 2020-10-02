import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/global';

import SettingsBlock from '../shared/settingsBlock'

/* About outputs the content of the Settings page */
export default function Settings({navigation}) {
    return (
        <View style={styles.blockStack}>
            <SettingsBlock icon="md-color-palette" title = "Theme" selected = "Light"
                page = "Theme" navigation = {navigation}></SettingsBlock>
            <SettingsBlock icon="md-notifications" title = "Notifications" selected = "On"></SettingsBlock>
            <SettingsBlock icon="md-person" title = "Account"></SettingsBlock>
            <SettingsBlock icon="md-information-circle-outline" title = "About" 
                page = "About" navigation = {navigation}></SettingsBlock>
        </View>
    );
};

const styles = StyleSheet.create({
    blockStack: {
        flex: 1,
        justifyContent: "flex-start",
    },
});