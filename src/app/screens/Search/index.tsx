import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './styles';
import BookCard from 'src/app/components/BookCard';

import Books from '../../../../assets/Books.json';

import Placeholder from './components/Placeholder';
import { useSelector } from 'react-redux';
import { BookData } from 'src/app/interfaces/book';

function Search({navigation}: any) {
  const query = useSelector((state: any) => state.currentQuery.query);

  const renderSeparator = () => <View style={styles.bookCardSeparator} />;
  const renderItem = ({item}: any) => (
    <BookCard book={item} navigation={navigation} />
  );
  const setId = (item: {id: string}) => item.id;
  const foundedBooks = query ? Books.filter((book: BookData) => {
    return book.author.toLowerCase().includes((query).toLowerCase()) ||
           book.title.toLowerCase().includes((query).toLowerCase()) ||
           book.genre.toLowerCase().includes((query).toLowerCase()) ||
           book.year.toLowerCase().includes((query).toLowerCase());
  }) : null;

  return (
    <View style={styles.mainContainer}>
      {foundedBooks ? 
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
