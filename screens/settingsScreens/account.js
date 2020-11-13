import React from 'react';
import {colorCodes} from '../../styles/global';
import {ScrollView} from 'react-native-gesture-handler';
import SettingsBlock from '../../shared/blocks/settingsBlock';
import AlertBlock from '../../shared/blocks/alertBlock';

/* Lets you change your account settings */
export default function Account({route, navigation}) {
    return (
        <ScrollView style = {{height: '100%', backgroundColor: colorCodes.back}}>
            <SettingsBlock title = "Change Password" icon = "ios-key"
                page = "Change Password" navigation = {navigation}></SettingsBlock>
            <AlertBlock title='Log Out'
                alertTitle='Are you sure you want to log out?'
                options={[
                { text: "No", style: "cancel", },
                { text: "Yes", /*onPress: logOut*/},
                ]}>   
            </AlertBlock>
        </ScrollView>
    );
};