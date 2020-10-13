import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation }) {

    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        <View>

            <MaterialIcons name='menu' size={35} onPress={openMenu} style={{paddingLeft: 10}} />

        </View>
    );
};