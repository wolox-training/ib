import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {BookDetailsProps} from 'src/app/interfaces/bookDetails';
import Spacer from 'src/app/components/Spacer';
import actions from 'src/redux/Book/actions';
import {State} from 'src/app/interfaces/state';
import styles from './styles';
import BookInfo from './components/BookInfo';
import BookComments from './components/BookComments';
import Data from '../../../../assets/MockedComments.json';

function BookDetails({route}: BookDetailsProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getDetails(route.params.bookId));
  }, []);

  const book = useSelector((state: State) => state.book.details);

  return (
    <View style={styles.mainContainer}>
      {book && <BookInfo book={book} />}
      <Spacer height={10} />
      <BookComments bookComments={Data} />
    </View>
  );
}

export default BookDetails;
