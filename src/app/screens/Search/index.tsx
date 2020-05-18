import React from 'react';
import {View, FlatList} from 'react-native';
import { useSelector } from 'react-redux';

import styles from './styles';
import BookCard from 'src/app/components/BookCard';
import Placeholder from './components/Placeholder';
import { BookData, RenderBookProps } from 'src/app/interfaces/book';
import { State } from 'src/app/interfaces/state';
import { LOOK_AT_KEYS } from './constants/constants';

function Search({navigation}: any) {
  const query = useSelector((state: State) => state.currentQuery.query);
  const books = useSelector((state: State) => state.library.books);

  const renderSeparator = () => <View style={styles.bookCardSeparator} />;
  const renderItem = ({item}: RenderBookProps) => (
    <BookCard book={item} navigation={navigation} />
  );
  const setId = (item: {id: string}) => item.id;

  const findBooks = (query = '') => {
    return query ? books.filter((book: BookData) => 
      LOOK_AT_KEYS.some(key => 
        (book[key as keyof BookData] as string).toLowerCase().includes((query).toLowerCase())
      )
    ) : [];
  };

  const foundedBooks = findBooks(query);

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={foundedBooks}
        renderItem={renderItem}
        keyExtractor={setId}
        ItemSeparatorComponent={renderSeparator}
        ListEmptyComponent={<Placeholder />}
      />
    </View>
  );
}

export default Search;
