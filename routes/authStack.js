import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import TabScreen from './tab'
import Login from '../screens/login';
import EmptyProfile from '../screens/emptyProfile'
import EmptyHabits from '../screens/emptyHabits'

const AuthStack = createStackNavigator();

function test() {
    console.log('test');
}

function AuthStackScreen({ update }) {

    return (
        <AuthStack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: 'orange' }
            }}
        >
            <AuthStack.Screen name="HabitBuddy" component={Login} initialParams={{ updateData: update }} />
            <AuthStack.Screen
                name='EmptyProfile'
                component={EmptyProfile}
                options={{
                    title: 'Account Information',
                }}
            />
            <AuthStack.Screen
                name='EmptyHabits'
                component={EmptyHabits}
                options={{title: 'Habit Information'}}
                initialParams={{ updateData: update }}
            />
        </AuthStack.Navigator>
    )
}

export default () => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [user, setUser] = React.useState(null); //null default

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

    function updateUser() {
        setUser({});
        console.log('test');
        //React.useEffect(() => { setUser({}) });
    }

    return (
        <NavigationContainer>
            {/* {isLoading ? (
        <Loading />
      ) :  */}
            {user ? (
                <TabScreen />
            ) : (
                    <AuthStackScreen update={updateUser} />
                )}
        </NavigationContainer>
    );
};