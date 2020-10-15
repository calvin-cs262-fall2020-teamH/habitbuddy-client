import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles, colorCodes } from '../../styles/global';

/* About outputs the content of the About page */
export default function About() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.aboutHeader}>Our Story</Text>
            <TextInput   
                        style={styles.inputBox}
                        placeholder='CURRENT HABIT'
                        onChangeText={(val) => setChabit(val)}/>
        </View>
    );
};