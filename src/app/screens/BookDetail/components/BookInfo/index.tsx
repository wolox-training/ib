import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import { BookProps } from 'src/app/interfaces/book';

const BookInfo = ({book}: BookProps) => {
  return (
    <View style={styles.mainContainer}>
      <Text>To be continued...</Text>
    </View>
  );
};

export default BookInfo;
