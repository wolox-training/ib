import 'react-native-gesture-handler';
import React from 'react';
import {useDispatch} from 'react-redux';
import {View, TouchableHighlight, Text} from 'react-native';

import Spacer from 'src/app/components/Spacer';
import actions from 'src/redux/Auth/actions';
import styles from './styles';

function CustomLogoutButton() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(actions.logoutUser());
  };

  return (
    <TouchableHighlight onPress={handleLogout}>
      <View style={styles.container}>
        <Spacer width={15} />
        <Text>LOGOUT</Text>
      </View>
    </TouchableHighlight>
  );
}

export default CustomLogoutButton;
