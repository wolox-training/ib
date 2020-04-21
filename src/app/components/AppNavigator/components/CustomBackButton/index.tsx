import 'react-native-gesture-handler';
import React from 'react';
import {Image, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import styles from './styles';
import backImg from './assets/ic_back.png';
import Spacer from 'src/app/components/Spacer';


const Stack = createStackNavigator();

function CustomBackButton() {

  return (
    <View style={styles.container}>
      <Spacer width={15}/>
      <Image source={backImg} style={styles.image}/>
    </View>
  );
}

export default CustomBackButton;
