import {StyleSheet} from 'react-native';

let light = {
	back: '#eee', //near-white
	front: '#fff', //white
	text: '#222', //near-black
	lightText: '#666', //light gray
	selected: 'gray', //gray
	highlightBack: '#caebff', //lightBlue
	highlightFront: '#1b86ff', //darkBlue
};

let dark = {
	back: '#303030', //dark gray
	front: '#282828', //near-black
	text: '#eee', //near-white
	lightText: '#aaa', //light gray
	selected: 'gray', //gray
	highlightBack: '#1b86ff', //darkBlue
	highlightFront: '#caebff', //lightBlue
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
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
	},
	input: {
		borderWidth: 1,
		borderColor: '#777',
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
		paddingHorizontal: 20,
		backgroundColor: colorCodes.front,
		alignItems: 'stretch',
		justifyContent: 'center',
	},
	aboutHeader: {
		paddingBottom: 10,
		fontWeight: 'bold',
		fontSize: 18,
		justifyContent: 'center',
		color: colorCodes.text,
	},
	aboutText: {
		paddingBottom: 20,
		fontSize: 14,
		justifyContent: 'center',
		color: colorCodes.text,
	},
	loginButtonText: {
		fontWeight: 'bold',
		color: colorCodes.text,
		justifyContent: 'center',
	},
	aboutScrollView: {
		padding: 20,
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
		shadowOffset: { width: 1, height: 1 },
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
		shadowOffset: { width: 1, height: 1 },
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
	},
	loginContainer: {
		backgroundColor: colorCodes.back,
		alignItems: 'center',
		justifyContent: 'flex-start',
		height: '100%',
	},
	loginText: {
		paddingTop: 30,
		paddingBottom: 10,
		fontSize: 16,
		color: colorCodes.text,
	},
	loginButtonContainer: {
		borderRadius: 10,
		width: 200,
		height: 40,
		backgroundColor: '#ffd699',
		shadowOffset: { width: 1, height: 1 },
		shadowColor: '#333',
		shadowOpacity: 0.3,
		shadowRadius: 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonPlacement: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	emptyHabitContainer: {
		flex: 1,
		backgroundColor: colorCodes.back,
		alignItems: 'center',
	},

});
