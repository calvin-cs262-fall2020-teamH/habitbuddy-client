import React from 'react';
import { View } from 'react-native';
import { Input } from 'react-native-elements';
import { useDynamicValue } from 'react-native-dynamic';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { dynamicStyles, dyColorCodes } from '../styles/global';

/**
 * PasswordInput is Input modified for passwords 
 * @author Kelsey Yen (kny4)
 * Modified from https://swairaq.medium.com/password-textinput-in-react-native-5ac3e89bcf4f 
 * @param {any} props
 * @return {Input} Text input with secure state and visibility icon
 */
export default function PasswordInput(props) {
    const dyStyles = useDynamicValue(dynamicStyles);

    const [secure, setSecure] = React.useState(props.secure);

    return (
        <View style={[{ width: '70%', flexDirection: 'row', justifyContent: 'flex-start' }, props.style]}>
            <Input
                containerStyle={{ flexDirction: 'row', }}
                // returnKeyType={'next'}
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
                    onPress={() => setSecure(!secure)}
                    color={useDynamicValue(dyColorCodes.text)} />
            }
            {
                !props.secure &&
                <View style={dyStyles.passwordIcon} />
            }
        </View>
    );

}