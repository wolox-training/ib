import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './styles';
import BookCard from 'src/app/components/BookCard';

import Placeholder from './components/Placeholder';

function Search({navigation}: any) {
  const renderSeparator = () => <View style={styles.bookCardSeparator} />;
  const renderItem = ({item}: any) => (
    <BookCard book={item} navigation={navigation} />
  );
  const setId = (item: {id: string}) => item.id;
  const foundedBooks: { id: string; }[] = [];

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
