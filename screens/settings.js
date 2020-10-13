import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { colorCodes} from '../styles/global';
import SettingsBlock from '../shared/settingsBlock';
import SwitchBlock from '../shared/switchBlock';

/* About outputs the content of the Settings page */
export default function Settings({navigation}) {
    return (
        <ScrollView style = {{height: '100%', backgroundColor: colorCodes.back}}>
            <SettingsBlock icon="md-color-palette" title = "Theme" selected = "Light"
                page = "Theme" navigation = {navigation}></SettingsBlock>
            <SwitchBlock icon="md-notifications" title = "Notifications" selected = "On"
                page = "Notifications" navigation = {navigation}></SwitchBlock>
            <SettingsBlock icon="md-person" title = "Account"
                page = "Account" navigation = {navigation}></SettingsBlock>
            <SettingsBlock icon="md-information-circle-outline" title = "About" 
                page = "About" navigation = {navigation}></SettingsBlock>
        </ScrollView>
    );
};