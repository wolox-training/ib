import 'react-native-gesture-handler';
import React from 'react';
import {View, TextInput, Image, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import Routes from 'src/constants/routes';
import SearchIcon from './assets/ic_search.png';

function SearchBar() {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate(Routes.Search);
  }

  return (
      <View style={styles.mainContainer}>
        <Image source={SearchIcon} style={styles.searchIcon}/>
        <TextInput style={styles.inputText}/>
        <Text>X</Text>
      </View>
  );
}

export default SearchBar;
