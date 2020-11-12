import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { colorCodes, dyColorCodes } from '../styles/global';
import SettingsBlock from '../shared/blocks/settingsBlock';
import SwitchBlock from '../shared/blocks/switchBlock';
import { useDynamicValue, useColorSchemeContext } from 'react-native-dynamic'

/* About outputs the content of the Settings page */
export default function Settings({navigation}) {

    const mode = useColorSchemeContext();
    let selectedTheme = mode.charAt(0).toUpperCase() + mode.slice(1);

    return (
        <ScrollView style = {{height: '100%', backgroundColor: useDynamicValue(dyColorCodes.back)}}>
            <SettingsBlock icon="md-color-palette" title = "Theme" selected = {selectedTheme}
                page = "Theme" navigation = {navigation}></SettingsBlock>
            <SwitchBlock icon="md-notifications" title = "Notifications"></SwitchBlock>
            <SettingsBlock icon="md-person" title = "Account"
                page = "Account" navigation = {navigation}></SettingsBlock>
            <SettingsBlock icon="md-information-circle-outline" title = "About" 
                page = "About" navigation = {navigation}></SettingsBlock>
        </ScrollView>
    );
};