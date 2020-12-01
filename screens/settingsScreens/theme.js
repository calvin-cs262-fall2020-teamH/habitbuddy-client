import React from 'react';
import { View } from 'react-native';
import { useColorSchemeContext, useDynamicValue } from 'react-native-dynamic';
import { dyColorCodes } from '../../styles/global';
import SelectionBlock from '../../shared/blocks/selectionBlock';

/* Lets your change your theme */
export default function Theme({route}) {

    const mode = useColorSchemeContext();
    
    return (
        <View style = {{height: '100%', backgroundColor: useDynamicValue(dyColorCodes.back)}}>
            <SelectionBlock
                data={[{ title: 'Light', id: 0, icon: "md-sunny" },
                    { title: 'Dark', id: 1, icon: "md-moon" }]}
                selectedId = {(mode === 'light' ? 0 : 1)}
            ></SelectionBlock>
        </View>
    );
};
