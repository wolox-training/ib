import React from 'react';
import {View, FlatList} from 'react-native';
import {RenderBookProps} from 'src/app/interfaces/book';
import BookCard from 'src/app/components/BookCard';
import {withSpinner} from 'src/app/components/Spinner';
import styles from './styles';

function Library({navigation, books}: any) {
  const renderSeparator = () => <View style={styles.bookCardSeparator} />;
  const renderItem = ({item}: RenderBookProps) => <BookCard book={item} navigation={navigation} />;
  const setId = (item: {id: string}) => item.id;

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={books}
        renderItem={renderItem}
        keyExtractor={setId}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
}

export default withSpinner(Library);
