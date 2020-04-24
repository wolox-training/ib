import {StyleSheet} from 'react-native';
import {polar} from '../../../constants/colors';

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: polar,
    flex: 1,
    height: '100%',
    padding: 20,
    width: '100%',
  },
  bookCardSeparator: {
    height: 20,
    width: '100%',
  },
});
