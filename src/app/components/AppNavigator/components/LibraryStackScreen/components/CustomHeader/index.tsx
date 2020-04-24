import 'react-native-gesture-handler';
import React from 'react';
import {Image} from 'react-native';
import styles from './styles';
import backgroundImage from './assets/bc_nav_bar.png';

function CustomHeader() {
  return <Image source={backgroundImage} style={styles.image} />;
}

export default CustomHeader;
