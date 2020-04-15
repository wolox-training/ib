import React from 'react';
import {SafeAreaView, StatusBar, View, FlatList} from 'react-native';
import BookCard from './components/BookCard';
import styles from './styles';
import {BookData} from './interfaces/book';

const DATA = require('../../assets/Books.json');

const App = () => {
  const renderItem = (book: BookData) => <BookCard book={book} />;
  const renderSeparator = () => <View style={styles.bookCardSeparator} />;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.mainContainer}>
          <FlatList
            data={DATA}
            renderItem={({item}) => renderItem(item)}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => renderSeparator()}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
