import 'react-native-gesture-handler';
import React from 'react';
import {Image, View, TouchableHighlight} from 'react-native';
import {StackHeaderLeftButtonProps} from '@react-navigation/stack';

import Spacer from 'src/app/components/Spacer';
import styles from './styles';
import backImg from './assets/ic_back.png';

function CustomBackButton(props: StackHeaderLeftButtonProps) {
  return (
    <TouchableHighlight onPress={props.onPress}>
      <View style={styles.container}>
        <Spacer width={15} />
        <Image source={backImg} style={styles.image} />
      </View>
    </TouchableHighlight>
  );
}

export default CustomBackButton;
