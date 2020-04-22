import React from 'react';
import {View, FlatList} from 'react-native';

import BookCard from '../../components/BookCard';
import styles from './styles';
<<<<<<< HEAD
import {useSelector} from 'react-redux';

function Books({navigation}: any) {
  const renderSeparator = () => <View style={styles.bookCardSeparator} />;
  const renderItem = ({item}: any) => (
    <BookCard book={item} navigation={navigation} />
  );
  const setId = (item: {id: string}) => item.id;

  const library = useSelector((state: any) => state.book);
=======
import Data from '../../../../assets/Books.json';

function Books({navigation}: any) {
  const renderSeparator = () => <View style={styles.bookCardSeparator} />;
  const renderItem = ({item}: any) => <BookCard book={item} navigation={navigation} />;
  const setId = (item: {id: string}) => item.id;
>>>>>>> Added a TabBar, refactored the Stack navigation

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
