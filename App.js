import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ColorSchemeProvider } from 'react-native-dynamic'
import { globalStyles } from './styles/global';

import Navigator from './routes/authStack';

export default function App() {
  return (
    // <NavigationContainer>
    <ColorSchemeProvider mode="light">
      <Navigator />
    </ColorSchemeProvider>
    // </NavigationContainer>
  );
}
