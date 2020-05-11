import 'react-native-gesture-handler';
import React from 'react';
import {Image, View, TouchableHighlight} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Spacer from 'src/app/components/Spacer';
import Routes from 'src/constants/routes';
import styles from './styles';
import backImg from './assets/ic_search.png';

function CustomSearchButton() {
  const navigation = useNavigation();

  const handleClick = () => navigation.navigate(Routes.Search);

  return (
    <TouchableHighlight onPress={handleClick}>
      <View style={styles.container}>
        <Image source={backImg} style={styles.image} />
        <Spacer width={15} />
      </View>
    </TouchableHighlight>
  );
}

export default CustomSearchButton;
