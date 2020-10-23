import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { colorCodes} from '../styles/global';
import SettingsBlock from '../shared/blocks/settingsBlock';
import SwitchBlock from '../shared/blocks/switchBlock';

/* About outputs the content of the Settings page */
export default function Settings({navigation}) {
    return (
        <ScrollView style = {{height: '100%', backgroundColor: colorCodes.back}}>
            <SettingsBlock icon="md-color-palette" title = "Theme" selected = "Light"
                page = "Theme" navigation = {navigation}></SettingsBlock>
            <SwitchBlock icon="md-notifications" title = "Notifications"></SwitchBlock>
            <SettingsBlock icon="md-person" title = "Account"
                page = "Account" navigation = {navigation}></SettingsBlock>
            <SettingsBlock icon="md-information-circle-outline" title = "About" 
                page = "About" navigation = {navigation}></SettingsBlock>
        </ScrollView>
    );
};