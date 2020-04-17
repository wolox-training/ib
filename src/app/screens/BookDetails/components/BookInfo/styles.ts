import {StyleSheet} from 'react-native';
import { white, tundora, monza } from 'src/constants/colors';

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: white,
    borderRadius: 5,
    height: 270,
    paddingTop: 15,
    paddingBottom: 20,
    paddingHorizontal: 30,
    width: '100%',
    justifyContent: 'space-between',
  },
  buttonsPanel: {
    alignSelf: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
  },
  info: {
    flexDirection: 'column',
  },
  image: {
    height: 105,
    resizeMode: 'contain',
    width: 70,
  },
  textTitle: {
    color: tundora,
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 29,
  },
  textAvailable: {
    color: monza,
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 18,
  },
  text: {
    color: tundora,
    fontSize: 15,
    fontWeight: '300',
    lineHeight: 18,
  }
});
