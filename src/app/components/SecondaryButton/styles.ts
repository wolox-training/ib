import {StyleSheet} from 'react-native';
import { cerulean, white } from 'src/constants/colors';

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: cerulean,
    borderRadius: 22,
    height: 44,
    width: 275
  },
  text: {
    color: white,
    fontSize: 15,
    fontWeight: 'bold',
    height: '100%',
    textAlignVertical: 'center',
    textAlign: 'center',
  }
});
