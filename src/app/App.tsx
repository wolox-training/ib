import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Books from './screens/Books';
import BookDetails from './screens/BookDetails';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Books">
        <Stack.Screen name="Books" component={Books} />
        <Stack.Screen name="Book Details" component={BookDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
