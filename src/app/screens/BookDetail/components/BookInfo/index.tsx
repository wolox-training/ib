import React from 'react';
import {View, Text} from 'react-native';
import {BookProps} from 'src/app/interfaces/bookCard';
import styles from './styles';

const BookInfo = ({book}: BookProps) => {
  return (
    <View style={styles.mainContainer}>
      <Text>asdasd</Text>
    </View>
  );
};

export default BookInfo;
