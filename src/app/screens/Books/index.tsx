import React from 'react';
import {View, FlatList} from 'react-native';
import BookCard from '../../components/BookCard';
import styles from './styles';
import Data from '../../../../assets/Books.json'

const Books = ({navigation}: any) => {
  const renderSeparator = () => <View style={styles.bookCardSeparator} />;
  const handleClick = () => navigation.navigate('Book Details');
  const renderItem = ({item}: any) =><BookCard book={item} onClick={handleClick} />;
  const setId = (item: { id: string; }) => item.id;

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={setId}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

export default Books;
