import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Routes from 'src/constants/routes';
import Login from 'src/app/screens/Login';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './components/RootNavigation';
import AppNavigator from './components/AppNavigator';

const Stack = createStackNavigator();

function GeneralNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={Routes.Login}>
        <Stack.Screen
          name={Routes.Login}
          component={Login}
          options={{
            header: () => null
          }}
        />
        <Stack.Screen
          name={Routes.Library}
          component={AppNavigator}
          options={{
            header: () => null
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default GeneralNavigator;
