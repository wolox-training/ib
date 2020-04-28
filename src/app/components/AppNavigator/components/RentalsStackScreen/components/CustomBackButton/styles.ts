import {StyleSheet} from 'react-native';
import {BUTTON_SIZE} from './constants/constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  image: {
    height: BUTTON_SIZE,
    width: BUTTON_SIZE,
    resizeMode: 'cover'
  }
});
