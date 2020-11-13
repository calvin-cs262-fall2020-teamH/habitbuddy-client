import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { globalStyles } from '../styles/global';
import { TouchableHighlight, Alert } from 'react-native';
// import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import Header from '../shared/header';
import Habittrack from '../screens/habittrack';
import AboutHabittrack from '../screens/aboutHabittrack';

const Stack = createStackNavigator();

export default function HabittrackStack( {navigation} ) {
   const alert = () => {
       Alert.alert(
           'Habit Track is a feature where you can track the days you do your habit. Simply click on a day to highlight it and watch your streaks grow!'
       )
   }
    return (
        <Stack.Navigator screenOptions={{
            headerStyle:{backgroundColor:'orange'}
        }}>
            <Stack.Screen
                name="Habit Track"
                component={Habittrack}
                options={{
                    headerLeft: () =>  <Header navigation={navigation} />,
                    headerTitleAlign: {textAlign:'center'},
                    headerRight: () => ( 
                        <MaterialIcons name="info-outline" size={27} color='#333' style={globalStyles.leftIcon}
                        onPress= {alert}
                        />
                        
                    ),
                }}
            />


        </Stack.Navigator>
    );
};
