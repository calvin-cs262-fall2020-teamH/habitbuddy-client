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
    backgroundColor: '#ffffff',
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

  /*Profile page--------------------------------------------------*/
  wholePage: {
    flex: 1
  },
  profContainer: {
    flex: .4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5
  },
  userNamePlacement: {
    marginTop: 10
  },
  profilePic: {
    width: 125,
    height: 125,
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'center',
    backgroundColor: "orange",
  },
  userInfo: {
    flex: .5
  },
  userEmail: {
    fontSize: 24,
    marginLeft: 15,
    marginTop: 15
  },
  cardItems: {
    justifyContent: 'center'
  },
  contentHolder: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: 'orange',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 7,
    marginVertical: 9,
  },
  leftIcon: {
    textAlign: 'right',
    paddingRight: 15,


  },
  profileInfo: {
    flexDirection: 'column',
    flex: .6,
    backgroundColor: 'blue'
  },
  nameInfo: {
    flexDirection: 'column',
    flex: .2,
    backgroundColor: 'orange',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  editView: {
    flexDirection: 'row',
    width: 105,
    height: 30,
    backgroundColor: "#ffd699",
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 6,

    borderColor: 'orange',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 7,
    marginVertical: 9,
  },
  editInfoText: {
    flex: .9,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

