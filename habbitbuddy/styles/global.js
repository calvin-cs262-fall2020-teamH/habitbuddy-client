import { StyleSheet } from 'react-native';

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
    backgroundColor: '#fff',
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