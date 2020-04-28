import React from 'react';
import {View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import BookCard from '../../components/BookCard';
import styles from './styles';
import { State } from 'src/app/interfaces/state';

function Rentals({navigation}: any) {
  const renderSeparator = () => <View style={styles.bookCardSeparator} />;
  const renderItem = ({item}: any) => (
    <BookCard book={item} navigation={navigation} />
  );
  const setId = (item: {id: string}) => item.id;

  const rentedBooks = useSelector((state: State) => state.rentals.books);

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={rentedBooks}
        renderItem={renderItem}
        keyExtractor={setId}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
}

export default Rentals;
