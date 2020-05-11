import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Routes from 'src/constants/routes';
import BookDetails from 'src/app/screens/BookDetails';
import Search from 'src/app/screens/Search';
import Books from 'src/app/screens/Books';
import {BASE_OPTIONS} from './constants/constants';
import CustomSearchButton from './components/CustomSearchButton';
import CustomBackButton from './components/CustomBackButton';
import SearchBar from './components/SearchBar';
import CustomLogoutButton from './components/CustomLogoutButton';

const Stack = createStackNavigator();

function LibraryStackScreen() {
  return (
    <Stack.Navigator initialRouteName={Routes.Library}>
      <Stack.Screen
        name={Routes.Library}
        component={Books}
        options={{
          ...BASE_OPTIONS,
          headerRight: () => <CustomSearchButton />,
          headerLeft: () => <CustomLogoutButton />
        }}
      />
      <Stack.Screen
        name={Routes.Details}
        component={BookDetails}
        options={{
          ...BASE_OPTIONS,
          headerLeft: (props) => <CustomBackButton {...props} />
        }}
      />
      <Stack.Screen
        name={Routes.Search}
        component={Search}
        options={{
          ...BASE_OPTIONS,
          headerLeft: () => null,
          headerRight: () => null,
          headerTitleContainerStyle: {
            width: '100%',
            paddingRight: 30
          },
          headerTitle: () => <SearchBar />
        }}
      />
    </Stack.Navigator>
  );
}

export default LibraryStackScreen;
