import React from 'react';
import {View} from 'react-native';

export default function Header({ navigation }) {

    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        <View>

            {/* <MaterialIcons name='menu' size={35} onPress={openMenu} style={{paddingLeft: 10}} /> */}

        </View>
    );
};