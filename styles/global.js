import { StyleSheet } from 'react-native';


export var colorCodes = {
    /* dark theme */
    // back: '#303030',
    // front: '#282828',
    // text: '#eee',
    // selected: 'gray',

    /* light theme */
    back: '#eee',
    front: '#fff',
    text: '#222',
    selected: 'gray',
};

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colorCodes.back,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buddyCards: {
    fontSize: 14,
    color: '#333',
  }
});
