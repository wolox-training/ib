import 'react-native-gesture-handler';
import React, { useRef, RefObject, useEffect } from 'react';
import {View, TextInput, Image, TouchableHighlight, NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import {useDispatch} from 'react-redux';

import styles from './styles';
import SearchIcon from './assets/ic_search.png';
import DeleteIcon from './assets/ic_delete.png';
import { setQuery } from 'src/redux/Search/actions';

function SearchBar() {
  const dispatch = useDispatch();
  const inputRef: RefObject<TextInput> | null = useRef(null);

  useEffect(() => {
    dispatch(setQuery(''))
  }, [])

  const handleClick = () => {
    inputRef.current && inputRef.current.clear();
    dispatch(setQuery(''));
  }

  const handleChange = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    dispatch(setQuery(event.nativeEvent.text));
  }

  return (
    <View style={styles.mainContainer}>
      <Image source={SearchIcon} style={styles.searchIcon}/>
      <TextInput ref={inputRef} style={styles.inputText} onChange={handleChange}/>
      <TouchableHighlight onPress={handleClick}>
        <Image source={DeleteIcon} style={styles.deleteIcon}/>
      </TouchableHighlight>
    </View>
  );
}

export default SearchBar;
