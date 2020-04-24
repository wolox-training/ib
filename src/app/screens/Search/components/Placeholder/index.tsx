import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import { SEARCH_TITLE, SEARCH_SUBTITLE } from './constants/constants';

import SearchIcon from './assets/ic_search.png'
import Spacer from 'src/app/components/Spacer';

function Placeholder() {
  return (
    <View style={styles.noResults}>
      <Image source={SearchIcon}/>
      <Spacer height={20} />
      <Text style={styles.title}>{SEARCH_TITLE}</Text>
      <Spacer height={15} />
      <Text style={styles.subtitle}>{SEARCH_SUBTITLE}</Text>
    </View>
  );
}

export default Placeholder;
