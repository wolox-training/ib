import {StyleSheet} from 'react-native';
import { tundora, black } from 'src/constants/colors';

export default StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    maxHeight: 90,
    width: '100%',
  },
  circleAvatar: {
    borderRadius: 45,
    height: 45,
    resizeMode: 'contain',
    width: 45,
  },
  textName: {
    color: black,
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 18,
  },
  textComment: {
    color: tundora,
    fontSize: 15,
    lineHeight: 18,
  },
});
