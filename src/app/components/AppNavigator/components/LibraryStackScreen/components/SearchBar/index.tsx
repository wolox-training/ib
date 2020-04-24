import 'react-native-gesture-handler';
import React from 'react';
import {View, TextInput, Image, TouchableHighlight} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import SearchIcon from './assets/ic_search.png';
import DeleteIcon from './assets/ic_delete.png';

function SearchBar() {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.goBack();
  }

  return (
      <View style={styles.mainContainer}>
        <Image source={SearchIcon} style={styles.searchIcon}/>
        <TextInput style={styles.inputText}/>
        <TouchableHighlight onPress={handleClick}>
          <Image source={DeleteIcon} style={styles.deleteIcon}/>
        </TouchableHighlight>
      </View>
  );
}

export default SearchBar;
