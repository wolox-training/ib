import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TabBarIcon from './components/TabbarIcon';
import {TABS, SCREENS} from './constants/constants';

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {TABS.map((item) => (
          <Tab.Screen
            key={item}
            name={item}
            component={SCREENS[item]}
            options={{
              tabBarIcon: ({focused}) => <TabBarIcon route={item} focused={focused} />
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
