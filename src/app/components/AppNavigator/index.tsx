import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Routes from 'src/constants/routes';
import Books from 'src/app/screens/Books';
import BookDetails from 'src/app/screens/BookDetails';
import CustomHeader from './components/CustomHeader';
import CustomBackButton from './components/CustomBackButton';
import { Platform } from 'react-native';
import { white } from 'src/constants/colors';

const Stack = createStackNavigator();
function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Routes.Books}>
        <Stack.Screen name={Routes.Books} component={Books} />
        <Stack.Screen
          name={Routes.Details}
          component={BookDetails}
          options={{
            headerBackground: () => <CustomHeader />,
            headerLeft: props => <CustomBackButton {...props}/>,
            headerTintColor: white,
            headerTitleAlign: Platform.OS == 'ios' ? 'center' : 'left',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
