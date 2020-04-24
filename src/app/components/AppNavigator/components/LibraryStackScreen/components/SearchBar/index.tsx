import 'react-native-gesture-handler';
import React, { useRef, RefObject } from 'react';
import {View, TextInput, Image, TouchableHighlight} from 'react-native';

import styles from './styles';
import SearchIcon from './assets/ic_search.png';
import DeleteIcon from './assets/ic_delete.png';

function SearchBar() {
  const inputRef: RefObject<TextInput> | null = useRef(null);

  const handleClick = () => {
    inputRef.current && inputRef.current.clear();
  }

  return (
      <View style={styles.mainContainer}>
        <Image source={SearchIcon} style={styles.searchIcon}/>
        <TextInput ref={inputRef} style={styles.inputText}/>
        <TouchableHighlight onPress={handleClick}>
          <Image source={DeleteIcon} style={styles.deleteIcon}/>
        </TouchableHighlight>
      </View>
  );
}

export default SearchBar;
