import 'react-native-gesture-handler';
import React from 'react';
import {useDispatch} from 'react-redux';
import {View, TouchableHighlight, Text} from 'react-native';
// import {useNavigation} from '@react-navigation/native';

// import Routes from 'src/constants/routes';
import Spacer from 'src/app/components/Spacer';
import actions from 'src/redux/Auth/actions';
import styles from './styles';

function CustomLogoutButton() {
  const dispatch = useDispatch();
  // const navigation = useNavigation();

  const handleLogout = () => {
    dispatch(actions.logoutUser());
    // navigation.goBack();
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
