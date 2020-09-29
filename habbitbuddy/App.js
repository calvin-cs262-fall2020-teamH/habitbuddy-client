import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
<<<<<<< HEAD
import Header from './components/header'

export default function App() {
  return (
    <View>
      <Header />
      <View style={styles.container}>
       <Text> </Text>
        <StatusBar style="auto" />
      </View>
    </View>
=======
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { globalStyles } from './styles/global';

import Navigator from './routes/drawer';

export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
>>>>>>> 639d23270c5d55469c6a347c1ac65cdff9cb2f81
  );
}