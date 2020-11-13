import React from 'react';
import {View} from 'react-native';
import {colorCodes} from '../../styles/global';
import SelectionBlock from '../../shared/blocks/selectionBlock';

/* Lets your change your theme */
export default function Theme() {
    return (
        <View style={{ height: '100%', backgroundColor: colorCodes.back }}>
            <SelectionBlock
                data={[{ title: 'Light', id: 0, icon: "md-sunny" },
                { title: 'Dark', id: 1, icon: "md-moon" }]}
            ></SelectionBlock>
        </View>
    );
};
