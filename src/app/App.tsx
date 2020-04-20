import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AppNavigator from './components/AppNavigator';

const Stack = createStackNavigator();

function App() {
  return (
    <AppNavigator />
  );
};

export default App;
