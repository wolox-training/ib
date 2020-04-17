import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

function PrimaryButton({active = false}){
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>ADD TO WISHLIST</Text>
    </View>
  );
};

export default PrimaryButton;
