import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './styles';
import BookCard from 'src/app/components/BookCard';

import Placeholder from './components/Placeholder';
import { useSelector } from 'react-redux';
import { BookData } from 'src/app/interfaces/book';

function Search({navigation}: any) {
  const query = useSelector((state: any) => state.currentQuery.query);
  const books = useSelector((state: any) => state.library.books);

  const renderSeparator = () => <View style={styles.bookCardSeparator} />;
  const renderItem = ({item}: any) => (
    <BookCard book={item} navigation={navigation} />
  );
  const setId = (item: {id: string}) => item.id;

  const findBooks = (query = '') => {
    const lookAt = ['author', 'title', 'genre', 'year'];
    return books.filter((book: BookData) => 
      lookAt.some(key => 
        (book[key as keyof BookData] as String).toLowerCase().includes((query).toLowerCase())
      )
    );
  };

  const foundedBooks = findBooks(query);

  return (
    <View style={styles.mainContainer}>
      {foundedBooks.length ? 
            <FlatList
            data={foundedBooks}
            renderItem={renderItem}
            keyExtractor={setId}
            ItemSeparatorComponent={renderSeparator}
          />
          :
          <Placeholder />
      }

    </View>
  );
}

export default Search;
