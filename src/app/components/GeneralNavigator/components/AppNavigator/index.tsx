import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { SCREENS, TABS } from './constants/constants';
import TabBarIcon from './components/TabbarIcon';

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
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
  );
}

export default AppNavigator;
