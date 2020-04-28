import 'react-native-gesture-handler';
import React, { useRef, RefObject, useEffect } from 'react';
import {View, TextInput, Image, TouchableHighlight, NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import {useDispatch} from 'react-redux';

import styles from './styles';
import SearchIcon from './assets/ic_search.png';
import DeleteIcon from './assets/ic_delete.png';
import {setQuery} from '../../../../../../../redux/Search/actions';

function SearchBar() {
  const dispatch = useDispatch();
  const inputRef: RefObject<TextInput> | null = useRef(null);

  useEffect(() => {
    dispatch(setQuery(''))
  }, [])

  const handleClick = () => {
    inputRef.current && inputRef.current.clear();
  }

  const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    dispatch(setQuery(e.nativeEvent.text));
  }

  return (
    <View style={styles.mainContainer}>
      <Image source={SearchIcon} style={styles.searchIcon}/>
      <TextInput ref={inputRef} style={styles.inputText} onChange={(e) => handleChange(e)}/>
      <TouchableHighlight onPress={handleClick}>
        <Image source={DeleteIcon} style={styles.deleteIcon}/>
      </TouchableHighlight>
    </View>
  );
}

export default SearchBar;
