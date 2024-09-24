import {StyleSheet} from 'react-native';

const buttonStyles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    marginRight: 10,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
});

export default buttonStyles;
