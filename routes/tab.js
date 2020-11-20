/* drawer.js creates the drawer in the top right which lists all the pages a user can access */

import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDynamicValue } from 'react-native-dynamic';

import Home from './homeStack';
import Buddies from './buddiesStack';
import Profile from './profileStack';
import HabitTrack from './habitTrackStack';
import Settings from './settingsStack';
import { dyColorCodes } from '../styles/global';

const Tab = createBottomTabNavigator();

export default function Tabs({ navigation, updateTheme }) {

	console.log(updateTheme);

	return (
		<Tab.Navigator initialRouteName="Home"
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === 'Home') {
						iconName = focused ? 'home' : 'home-outline';
					} else if (route.name === 'Settings') {
						iconName = focused ? 'settings' : 'settings-outline';
					} else if (route.name === 'Profile') {
						iconName = focused ? 'account' : 'account-outline';
					} else if (route.name === 'Buddies') {
						iconName = focused ? 'account-multiple' : 'account-multiple-outline';
					} else if (route.name === 'Habit Tracker') {
						iconName = focused ? 'calendar-month' : 'calendar-month-outline';
					}

					// You can return any component that you like here!
					return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
				},
			})}
			tabBarOptions={{
				activeTintColor: 'tomato',
				inactiveTintColor: 'gray',
				style: { height: 50, backgroundColor: useDynamicValue(dyColorCodes.front) },
				//showLabel: false,
			}}
		>
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="Buddies" component={Buddies}
				options={({ route }) => ({
					tabBarVisible: getTabBarVisibility(route)
				})}
			/>
			<Tab.Screen name="Profile" component={Profile}
				options={({ route }) => ({
					tabBarVisible: getTabBarVisibility(route)
				})}
			/>
			<Tab.Screen name="Habit Tracker" component={HabitTrack} />
			<Tab.Screen name="Settings" component={Settings}
				initialParams={{ updateTheme: { updateTheme } }}
				options={({ route }) => ({
					tabBarVisible: getTabBarVisibility(route)
				})}
			/>

		</Tab.Navigator>
	);
};

function getTabBarVisibility(route) {
	const routeName = route.state ? route.state.routes[route.state.index].name : '';
	switch (routeName) {
		case 'Theme':
		case 'Account':
		case 'Change Password':
		case 'About':
		case 'EditProfile':
		case 'BuddyDetails':
			return false;
		default:
			return true;
	}
}