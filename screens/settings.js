import React from 'react';
import { ScrollView, View } from 'react-native-gesture-handler';
import { colorCodes, dyColorCodes } from '../styles/global';
import { useDynamicValue, useColorSchemeContext } from 'react-native-dynamic'
import SettingsBlock from '../shared/blocks/settingsBlock';
import SwitchBlock from '../shared/blocks/switchBlock';
import AlertBlock from '../shared/blocks/alertBlock';
import CommonDataManager from '../data/CommonDataManager';

/* About outputs the content of the Settings page */
export default function Settings({ navigation }) {
    let commonData = CommonDataManager.getInstance();

    function logOut() {
        navigation.navigate("HabitBuddy");
        commonData.setUserID(null);
    }

    const mode = useColorSchemeContext();
    let selectedTheme = mode.charAt(0).toUpperCase() + mode.slice(1);

    return (
        <ScrollView style={{ height: '100%', backgroundColor: useDynamicValue(dyColorCodes.back) }}>
            <SettingsBlock icon="md-color-palette" title="Theme" selected={selectedTheme}
                page="Theme" navigation={navigation}></SettingsBlock>
            {/* <SwitchBlock icoSn="md-notifications" title="Notifications"></SwitchBlock> */}
            <SettingsBlock icon="ios-lock" title="Change Password"
                page="Change Password" navigation={navigation} />
            <SettingsBlock icon="md-information-circle-outline" title="About"
                page="About" navigation={navigation} />
            <AlertBlock title='Log Out'
                alertTitle='Are you sure you want to log out?'
                alertMsg=""
                options={[
                    { text: "No", style: "cancel", },
                    { text: "Yes", onPress: () => logOut() },
                ]}>
            </AlertBlock>
        </ScrollView>
    );
};