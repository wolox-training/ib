import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { SCREENS, TABS } from './constants/constants';
import TabBarIcon from './components/TabbarIcon';
import { navigationRef } from './components/RootNavigation';

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Tab.Navigator>
        {TABS.map((item) => (
          <Tab.Screen
            key={item}
            name={item}
            component={SCREENS[item]}
            options={{
              tabBarIcon: ({focused}) => (
                <TabBarIcon route={item} focused={focused} />
              )
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
