import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    alignItems: 'flex-start',
    backgroundColor: 'white',
    borderRadius: 5,
    flexDirection: 'row',
    height: 90,
    justifyContent: 'flex-start',
    paddingHorizontal: 30,
    paddingVertical: 15,
    width: '100%',
  },
  cardImage: {
    height: 60,
    resizeMode: 'contain',
    width: 40,
  },
  titleContainer: {
    flex: 1,
    marginLeft: 20,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    overflow: 'hidden',
  },
  subtitle: {
    color: '#4A4A4A',
    fontSize: 15,
  },
});
