import React from 'react';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';

import Navigator from './components/GeneralNavigator';
import store from '../redux/store';

function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

export default App;
