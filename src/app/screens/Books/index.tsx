import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import BookCard from '../../components/BookCard';
import styles from './styles';
import {setBooks} from 'src/redux/Books/actions';
import MyBooks from '../../../../assets/Books.json';
import { State } from 'src/app/interfaces/state';

function Books({navigation}: any) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setBooks(MyBooks));
  }, []);

  const renderSeparator = () => <View style={styles.bookCardSeparator} />;
  const renderItem = ({item}: any) => (
    <BookCard book={item} navigation={navigation} />
  );
  const setId = (item: {id: string}) => item.id;

  const library = useSelector((state: State) => state.library.books);

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={library}
        renderItem={renderItem}
        keyExtractor={setId}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
}

export default Books;
