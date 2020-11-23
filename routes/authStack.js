import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ColorSchemeProvider } from 'react-native-dynamic';

import TabScreen from './tab';
import Login from '../screens/login';
import SignUpProfile from '../screens/signUpProfile'
import SignUpHabit from '../screens/signUpHabit'
import CommonDataManager from '../data/CommonDataManager';

const AuthStack = createStackNavigator();

function AuthStackScreen({ update }) {

    return (
        <AuthStack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: 'orange' }
            }}
        >
            <AuthStack.Screen name="HabitBuddy" component={Login} initialParams={{ updateData: update }} />
            <AuthStack.Screen
                name='SignUpProfile'
                component={SignUpProfile}
                options={{
                    title: 'Account Information',
                }}
            />
            <AuthStack.Screen
                name='SignUpHabit'
                component={SignUpHabit}
                options={{title: 'Habit Information'}}
                initialParams={{ updateData: update }}
            />
        </AuthStack.Navigator>
    )
}

export default () => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [user, setUser] = React.useState(null); //null default
    const [theme, setTheme] = React.useState('light');

    //   React.useEffect(() => {
    //     setTimeout(() => {
    //       setIsLoading(!isLoading);
    //     }, 500);
    //   }, []);

    //   React.useEffect(() => {
    //     setTimeout(() => {
    //       setUser({});
    //     }, 5000);
    //   }, []);

    // React.useEffect(() => {
    //     setTimeout(() => {
    //       setTheme('light');
    //     }, 5000);
    //   }, []);

    function updateUser(val) {
        setUser(val);
        //React.useEffect(() => { setUser({}) });
    }

    function updateTheme(themeVal) {
        setTheme(themeVal)
    }

    let commonData = CommonDataManager.getInstance();
    commonData.setUpdateUser(updateUser);
    commonData.setUpdateTheme(updateTheme);

    return (
        <NavigationContainer>
            {/* {isLoading ? (
        <Loading />
      ) :  */}
            {user ? (
                <ColorSchemeProvider mode={theme}>
                    <TabScreen/>
                </ColorSchemeProvider>
            ) : (
                    <ColorSchemeProvider>
                        <AuthStackScreen/>
                    </ColorSchemeProvider>
                )}
        </NavigationContainer>
    );
};