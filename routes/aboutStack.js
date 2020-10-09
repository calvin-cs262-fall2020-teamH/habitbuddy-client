// import React from 'react';
// import {createStackNavigator} from '@react-navigation/stack';

// import Header from '../shared/header';
// import About from '../screens/about';

// const Stack = createStackNavigator();

// /*AboutStack creates a stack of screens with the default being the About screen */
// export default function AboutStack( {navigation} ) {
//     return (
//         <Stack.Navigator screenOptions={{
//             headerStyle:{backgroundColor:'orange'}
//         }}>
//             <Stack.Screen
//                 name="About"
//                 component={About}
//                 options={{
//                     headerLeft: () =>  <Header navigation={navigation} />
//                 }}
//             />
//         </Stack.Navigator>
//     );
// };