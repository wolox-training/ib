import {StyleSheet} from 'react-native';
import {polar, black, tundora} from '../../../constants/colors';

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: polar,
    height: '100%',
    padding: 20,
    width: '100%',
  },
  bookCardSeparator: {
    height: 20,
    width: '100%',
  },
  noResults: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
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
