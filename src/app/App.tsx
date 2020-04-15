import React from 'react';
import {SafeAreaView, StatusBar, View, FlatList} from 'react-native';
import BookCard from './components/BookCard';
import styles from './styles';

const DATA = require('../../assets/Books.json');

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.mainContainer}>
          <FlatList
            data={DATA}
            renderItem={({item}) => <BookCard book={item} />}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (
              <View style={styles.bookCardSeparator} />
            )}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
