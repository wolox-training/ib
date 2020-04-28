import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

function SecondaryButton({rented = false}) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>{rented ? 'RETURN BOOK' : 'RENT'}</Text>
    </View>
  );
};

export default SecondaryButton;
