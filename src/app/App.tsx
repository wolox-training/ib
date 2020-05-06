import 'react-native-gesture-handler';
import React from 'react';
import Navigator from './components/GeneralNavigator';
import {Provider} from 'react-redux';

import store from '../redux/store';

function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
