import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createSwitchNavigator , createAppContainer} from 'react-navigation';

import { navigationRef } from './components/RootNavigation';
import Routes from 'src/constants/routes';
import Login from 'src/app/screens/Login';
import AppNavigator from './components/AppNavigator';


const Switch = createAppContainer(
  createSwitchNavigator(
    {
      [Routes.Login]: Login,
      [Routes.Library]: AppNavigator
    },
    {
      initialRouteName: Routes.Login,
    }
  )
);

function GeneralNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Switch />
    </NavigationContainer>
  );
}

export default GeneralNavigator;
