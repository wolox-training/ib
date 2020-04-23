import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './styles';
import BookCard from 'src/app/components/BookCard';
import { useNavigation } from '@react-navigation/native';

function Search() {
  const navigation = useNavigation();
  const renderSeparator = () => <View style={styles.bookCardSeparator} />;
  const renderItem = ({item}: any) => (
    <BookCard book={item} navigation={navigation} />
  );
  const setId = (item: {id: string}) => item.id;
  const foundedBooks: { id: string; }[] = [];

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={foundedBooks}
        renderItem={renderItem}
        keyExtractor={setId}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
}

export default Search;
