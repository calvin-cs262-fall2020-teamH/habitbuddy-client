import React from 'react';
import Navigator from './routes/authStack';

//console.disableYellowBox = true; //hide warning messages

/**
 * App runs HabitBuddy app
 */
export default function App() {
  return (
    <Navigator />
  );
}
