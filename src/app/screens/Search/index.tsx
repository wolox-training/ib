import React from 'react';
import {View, FlatList, Image, Text} from 'react-native';
import styles from './styles';
import BookCard from 'src/app/components/BookCard';
import { useNavigation } from '@react-navigation/native';
import { SEARCH_TITLE, SEARCH_SUBTITLE } from './constants/constants';

import SearchIcon from './assets/ic_search.png'
import Spacer from 'src/app/components/Spacer';

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
      {foundedBooks.length != 0 ? 
            <FlatList
            data={foundedBooks}
            renderItem={renderItem}
            keyExtractor={setId}
            ItemSeparatorComponent={renderSeparator}
          />
          :
          <View style={styles.noResults}>
            <Image source={SearchIcon}/>
            <Spacer height={20} />
            <Text style={styles.title}>{SEARCH_TITLE}</Text>
            <Spacer height={15} />
            <Text style={styles.subtitle}>{SEARCH_SUBTITLE}</Text>
          </View>
      }
    </View>
  );
}

export default Search;
