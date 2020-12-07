import React from 'react';
import { useDynamicValue } from 'react-native-dynamic';
import { ScrollView } from 'react-native-gesture-handler';
import SettingsBlock from '../../shared/blocks/settingsBlock';
import AlertBlock from '../../shared/blocks/alertBlock';
import { dyColorCodes } from '../../styles/global';
import CommonDataManager from '../../data/CommonDataManager';
import { common } from '@material-ui/core/colors';

/* Lets you change your account settings */
export default function Account({navigation}) {

    let commonData = CommonDataManager.getInstance();

    function logOut() {
        navigation.navigate("HabitBuddy");
        commonData.setUserID(null);
    }

    return (
        <ScrollView style = {{height: '100%', backgroundColor: useDynamicValue(dyColorCodes.back)}}>
            <SettingsBlock title = "Change Password" icon = "ios-key"
                page = "Change Password" navigation = {navigation}></SettingsBlock>
            <AlertBlock title='Log Out'
                alertTitle='Are you sure you want to log out?'
                options={[
                { text: "No", style: "cancel", },
                { text: "Yes", onPress: () => logOut()},
                ]}></AlertBlock>
        </ScrollView>
    );
};