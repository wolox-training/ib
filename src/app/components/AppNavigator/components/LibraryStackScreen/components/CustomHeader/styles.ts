import {StyleSheet} from 'react-native';
import {black} from 'src/constants/colors';
import {TAB_ICON_SIZE} from './constants/constants';

export default StyleSheet.create({
  image: {
    width: '100%',
    height: 70,
    resizeMode: 'stretch'
  },
  icon: {
    height: TAB_ICON_SIZE,
    width: TAB_ICON_SIZE,
    backgroundColor: black
  }
});
