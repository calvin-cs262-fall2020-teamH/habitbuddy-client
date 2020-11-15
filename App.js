import React from 'react';
import { ColorSchemeProvider } from 'react-native-dynamic'

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
