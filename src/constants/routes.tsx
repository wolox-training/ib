import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Books from 'src/app/screens/Books';
import BookDetails from 'src/app/screens/BookDetails';

const Stack = createStackNavigator();

function Routes() {
  return (
    <>
      <Stack.Screen name="Books" component={Books} />
      <Stack.Screen name="Book Details" component={BookDetails} />
    </>
  );
}

export default Routes;
