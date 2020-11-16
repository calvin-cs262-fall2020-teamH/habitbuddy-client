import React from 'react';
import { View } from 'react-native';
import { useDynamicValue } from 'react-native-dynamic';
import { dynamicStyles, dyColorCodes } from '../styles/global';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function PasswordInput(props) {

    const dyStyles = useDynamicValue(dynamicStyles);

    const [focus, setFocus] = React.useState(props.focus);
    const [secure, setSecure] = React.useState(props.secure);

    return (
        <View style={[dyStyles.container, props.dyStyle, focus ? dyStyles.focused : dyStyles.notFocused]}>
            <PasswordInput
                setFocus={focus} //whatever focus state holds
                onChangeText={text => props.onChangeText(text)}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                secureTextEntry={secure}
                style={dyStyles.input}
                placeholder={props.placeholder}
                placeholderTextColor={useDynamicValue(dyColorCodes.lightText)}

                />
                {
                    props.secure &&
                    <MaterialCommunityIcons
                        style={dyStyles.passwordIcon}
                        name={secure ? 'eye' : 'eye-slash'}
                        size={25} color='#333'
                        onPress={ () => setSecure(!secure) } />
                }
                {
                    !props.secure &&
                    <View style={dyStyles.passwordIcon}/>
                }
        </View>
    );

}