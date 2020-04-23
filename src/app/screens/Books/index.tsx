import React from 'react';
import {View, FlatList} from 'react-native';
import BookCard from '../../components/BookCard';
import styles from './styles';
import Data from '../../../../assets/Books.json';
import { connect } from 'react-redux';

function Books({navigation}: any) {
  const renderSeparator = () => <View style={styles.bookCardSeparator} />;
  const renderItem = ({item}: any) => <BookCard book={item} navigation={navigation} />;
  const setId = (item: {id: string}) => item.id;

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
}

const mapStateToProps = (state: any) => ({
  library: state.books
})

export default connect(mapStateToProps)(Books);
