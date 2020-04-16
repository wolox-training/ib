import React from 'react';
import {View, FlatList} from 'react-native';
import BookCard from '../../components/BookCard';
import styles from './styles';
import {BookData} from '../../interfaces/book';

const DATA = require('../../../../assets/Books.json');

const Books = ({navigation}: any) => {
  const renderSeparator = () => <View style={styles.bookCardSeparator} />;
  const handleClick = () => navigation.navigate('Book Details');
  const renderItem = (book: BookData) => <BookCard book={book} onClick={handleClick} />;

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={DATA}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => renderSeparator()}
      />
    </View>
  );
};

export default Books;
