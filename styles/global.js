import { StyleSheet } from 'react-native';

let light = {
  back: '#eee',
  front: '#fff',
  text: '#222',
  lightText: '#666',
  selected: 'gray',
  highlightBack: '#caebff',
  highlightFront: '#1b86ff',
};

let dark = {
    back: '#303030',
    front: '#282828',
    text: '#eee',
    lightText: '#aaa',
    selected: 'gray',
    highlightBack: '#1b86ff',
    highlightFront: '#caebff',
};

export let colorCodes = light;

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colorCodes.text,
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
  input: {
    borderWidth: 1,
    borderColor:'#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
  buddyCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colorCodes.text,
    marginLeft: 55,     //55 value used as a position over to make up for the profile picture
  },
  buddyCardText: {
    fontSize: 14,
    color: colorCodes.text,
    marginLeft: 55,
  },
  buddyDisplayContainer: {      //used to display the buddy cards on the buddies page
    flex: 1,
    padding: 20,
    backgroundColor: colorCodes.front,
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
  },
  loginContainer:{
    backgroundColor: colorCodes.back,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 14,
    color: colorCodes.text,
  },
  loginButtonContainer: {
    borderRadius: 10,
    width: 100,
    height: 40,
    backgroundColor: '#ffd699',    
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    fontWeight: 'bold',
    color: colorCodes.text,
    justifyContent: 'center', 
  },
});


