import {StyleSheet} from 'react-native';
import { white } from 'src/constants/colors';
import { SEARCH_ICON_SIZE, DELETE_ICON_SIZE } from './constants/constants';

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
    height: SEARCH_ICON_SIZE,
    width: SEARCH_ICON_SIZE,
  },
  deleteIcon: {
    height: DELETE_ICON_SIZE,
    width: DELETE_ICON_SIZE,
  },
  inputText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 14,
  }
});
