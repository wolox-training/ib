import 'react-native-gesture-handler';
import React from 'react';
import {View, TextInput, Image, TouchableHighlight} from 'react-native';

import styles from './styles';
import SearchIcon from './assets/ic_search.png';
import DeleteIcon from './assets/ic_delete.png';

function SearchBar() {
  let textInput: TextInput | null;

  const handleClick = () => {
    textInput && textInput.clear()
  }

  return (
      <View style={styles.mainContainer}>
        <Image source={SearchIcon} style={styles.searchIcon}/>
        <TextInput ref={input => { textInput = input }} style={styles.inputText}/>
        <TouchableHighlight onPress={handleClick}>
          <Image source={DeleteIcon} style={styles.deleteIcon}/>
        </TouchableHighlight>
      </View>
  );
}

export default SearchBar;
