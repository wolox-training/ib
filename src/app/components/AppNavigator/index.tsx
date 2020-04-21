import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Routes from 'src/constants/routes';
import CustomSearchButton from './components/LibraryTabScreen/components/CustomSearchButton';
import BookDetails from 'src/app/screens/BookDetails';
import Search from 'src/app/screens/Search';
import LibraryTabScreen from './components/LibraryTabScreen';
import { BASE_OPTIONS } from './constants/constants';

const Stack = createStackNavigator();
function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Routes.Library}>
        <Stack.Screen 
          name={Routes.Library}
          component={LibraryTabScreen} 
          options={{
            ...BASE_OPTIONS,
            headerRight: () => <CustomSearchButton />,
          }}
        />
        <Stack.Screen
          name={Routes.Details}
          component={BookDetails}
          options={{...BASE_OPTIONS}}
        />
        <Stack.Screen
          name={Routes.Search}
          component={Search}
          options={{...BASE_OPTIONS}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
