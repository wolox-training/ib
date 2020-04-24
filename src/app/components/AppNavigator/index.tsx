import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Routes from 'src/constants/routes';
import CustomSearchButton from './components/LibraryTabScreen/components/CustomSearchButton';
import BookDetails from 'src/app/screens/BookDetails';
import Search from 'src/app/screens/Search';
import LibraryTabScreen from './components/LibraryTabScreen';
import { BASE_OPTIONS } from './constants/constants';
import SearchBar from './components/LibraryTabScreen/components/SearchBar';

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
