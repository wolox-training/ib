import {StyleSheet} from 'react-native';
import {black, tundora} from '../../../../../constants/colors';

export default StyleSheet.create({
  noResults: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    color: black,
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 18,
    textAlign: 'center',
  },
  subtitle: {
    color: tundora,
    fontSize: 15,
    fontWeight: '300',
    lineHeight: 18,
    textAlign: 'center',
  }
});
