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
  buddyCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 55,     //55 value used as a position over to make up for the profile picture
  },
  buddyCardText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 55,
  },
  buddyDisplayContainer: {      //used to display the buddy cards on the buddies page
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    
  },
  aboutHeader: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingBottom: 10,
    fontWeight: 'bold',
    fontSize: 20,
    justifyContent: 'center',

  },
  aboutText: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    fontSize: 14,
    justifyContent: 'center',
  }
});
