import React from 'react';
import { View } from 'react-native';
import { Input } from 'react-native-elements';
import { useDynamicValue } from 'react-native-dynamic';
import { dynamicStyles, dyColorCodes } from '../styles/global';
import { MaterialCommunityIcons } from '@expo/vector-icons';

/* passwordInput is a textInput specifically for passwords 
*  Written by Kelsey Yen
*  Modified from https://swairaq.medium.com/password-textinput-in-react-native-5ac3e89bcf4f 
*/
export default function PasswordInput(props) {

    const dyStyles = useDynamicValue(dynamicStyles);

    const [secure, setSecure] = React.useState(props.secure);

    return (
        <View style={[{ width: '70%', flexDirection: 'row', justifyContent: 'flex-start' }, props.style]}>
            <Input
                containerStyle={{ flexDirction: 'row', }}
                onChangeText={text => props.onChangeText(text)}
                secureTextEntry={secure}
                style={dyStyles.textInput}
                placeholder={props.placeholder}
                placeholderTextColor={useDynamicValue(dyColorCodes.lightText)}>
            </Input>
            {
                props.secure &&
                <MaterialCommunityIcons
                    name={secure ? 'eye' : 'eye-off'}
                    size={25}
                    onPress={() => setSecure(!secure)} />
            }
            {
                !props.secure &&
                <View style={dyStyles.passwordIcon} />
            }
        </View>
    );

}