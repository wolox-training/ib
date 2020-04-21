import 'react-native-gesture-handler';
import React from 'react';
import {Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import styles from './styles';
import backgroundImage from './assets/bc_nav_bar.png';


const Stack = createStackNavigator();

function CustomHeader() {

  return (
    <Image source={backgroundImage} style={styles.image}/>
  );
}

export default CustomHeader;
