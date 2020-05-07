import {StyleSheet} from 'react-native';
import { white, black } from 'src/constants/colors';

export default StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%',
  },
  background: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    backgroundColor: white,
    borderRadius: 20,
    width: 280,
    color: black,
    padding: 5,
    margin: 5
  },
  inputTitle: {
    fontWeight: 'bold'
  }
});
