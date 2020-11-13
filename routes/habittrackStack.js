import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { globalStyles } from '../styles/global';
import { TouchableHighlight } from 'react-native';
// import { colorCodes } from '../../styles/global';



import Header from '../shared/header';
import Habittrack from '../screens/habittrack';

const Stack = createStackNavigator();

export default function HabittrackStack( {navigation} ) {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle:{backgroundColor:'orange'}
        }}>
            <Stack.Screen
                name="Habittrack"
                component={Habittrack}
                options={{
                    headerLeft: () =>  <Header navigation={navigation} />,
                    headerTitleAlign: {textAlign:'center'},
                    headerRight: () => ( 
                        <MaterialIcons name="info-outline" size={27} color='#333' style={globalStyles.leftIcon}
                        />
                        
                    ),
                }}
            />

        </Stack.Navigator>
    );
};