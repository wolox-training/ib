import {StyleSheet} from 'react-native';
import { white } from 'src/constants/colors';
import { ICON_SIZE } from './constants/constants';

export default StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: white,
    borderRadius: 20,
    flexDirection: 'row',
    height: 35,
    paddingHorizontal: 15,
  },
  searchIcon: {
    height: ICON_SIZE,
    width: ICON_SIZE,
  },
  inputText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 14,
  }
});
