import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from 'src/constants/routes';
import Books from 'src/app/screens/Books';
import BookDetails from 'src/app/screens/BookDetails';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Routes.Books}>
        <Stack.Screen name={Routes.Books} component={Books} />
        <Stack.Screen name={Routes.Details} component={BookDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
