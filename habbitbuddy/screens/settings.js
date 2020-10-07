import React from 'react';
import { View } from 'react-native';

import SettingsBlock from '../shared/settingsBlock'

/* About outputs the content of the Settings page */
export default function Settings({navigation}) {
    return (
        <View>
            <SettingsBlock icon="md-color-palette" title = "Theme" selected = "Light"
                page = "Theme" navigation = {navigation}></SettingsBlock>
            <SettingsBlock icon="md-notifications" title = "Notifications" selected = "On"
                page = "Notifications" navigation = {navigation}></SettingsBlock>
            <SettingsBlock icon="md-person" title = "Account"
                page = "Account" navigation = {navigation}></SettingsBlock>
            <SettingsBlock icon="md-information-circle-outline" title = "About" 
                page = "About" navigation = {navigation}></SettingsBlock>
        </View>
    );
};