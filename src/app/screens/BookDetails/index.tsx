import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import BookInfo from './components/BookInfo';
import { BookDetailsProps } from 'src/app/interfaces/bookDetails';

const BookDetails = ({route}: BookDetailsProps) => {
  return <View style={styles.mainContainer} >
    <BookInfo book={route.params.book} />
  </View>;
};

export default BookDetails;
