import {StyleSheet} from 'react-native';
import {tundora, black} from 'src/constants/colors';
import {AVATAR_SIZE} from './constants/constants';

export default StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    maxHeight: 90,
    width: '100%'
  },
  circleAvatar: {
    borderRadius: AVATAR_SIZE,
    height: AVATAR_SIZE,
    resizeMode: 'cover',
    width: AVATAR_SIZE
  },
  textContainer: {
    flex: 1
  },
  textName: {
    color: black,
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 18
  },
  textComment: {
    color: tundora,
    fontSize: 15,
    lineHeight: 18
  }
});
