import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import BookInfo from './components/BookInfo';
import {BookDetailsProps} from 'src/app/interfaces/bookDetails';
import BookComments from './components/BookComments';
import Data from '../../../../assets/MockedComments.json';
import Spacer from 'src/app/components/Spacer';

function BookDetails({route}: BookDetailsProps) {
  return (
    <View style={styles.mainContainer}>
      <BookInfo book={route.params.book} />
      <Spacer height={10}/>
      <BookComments bookComments={Data}/>
    </View>
  );
}

export default BookDetails;
