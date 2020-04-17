import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

function SecondaryButton({active = false}) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>RENT</Text>
    </View>
  );
};

export default SecondaryButton;
