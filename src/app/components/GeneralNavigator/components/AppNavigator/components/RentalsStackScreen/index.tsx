import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Routes from 'src/constants/routes';
import { BASE_OPTIONS } from './constants/constants';
import BookDetails from 'src/app/screens/BookDetails';
import CustomBackButton from './components/CustomBackButton';
import Rentals from 'src/app/screens/Rentals';

const Stack = createStackNavigator();

function RentalsStackScreen() {
  return (
    <Stack.Navigator initialRouteName={Routes.Rentals}>
      <Stack.Screen 
        name={Routes.Rentals}
        component={Rentals} 
        options={{
          ...BASE_OPTIONS,
        }}
      />
      <Stack.Screen
        name={Routes.Details}
        component={BookDetails}
        options={{
          ...BASE_OPTIONS,
          headerLeft: (props) => <CustomBackButton {...props} />,
        }}
      />
    </Stack.Navigator>
  );
}

export default RentalsStackScreen;
