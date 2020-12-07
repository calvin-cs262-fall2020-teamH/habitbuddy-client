import { StyleSheet } from 'react-native';
import { DynamicValue, DynamicStyleSheet } from 'react-native-dynamic'

let light = {
	back: '#eee', //near-white
	front: '#fff', //white
	text: '#222', //near-black
	cardText: '#222', //near-black
	lightText: '#666', //light gray
	selected: 'gray', //gray
	highlightBack: '#caebff', //lightBlue
	highlightFront: '#1b86ff', //darkBlue
	card: '#ffd699',
};

let dark = {
	back: '#303030', //dark gray
	front: '#282828', //near-black
	text: '#ddd', //near-white
	cardText: '#222', //near-black
	lightText: '#aaa', //light gray
	selected: 'gray', //gray
	highlightBack: '#1b86ff', //darkBlue
	highlightFront: '#caebff', //lightBlue
	card: '#ffd699',
};

export let dyColorCodes = {
	back: new DynamicValue('#eee', '#303030'), //for the background of a screen
	front: new DynamicValue('#fff', '#282828'), //for an object in the foreground of the screen
	frontCard: new DynamicValue('#D3D3D3', '#282828'),
	text: new DynamicValue('#222', '#eee'), //for text which isn't on a card
	cardText: new DynamicValue('#000', '#000'), //for text that is on a card
	lightText: new DynamicValue('#666', '#aaa'), //for placeholder text
	selected: new DynamicValue('gray', 'gray'), //for text that is displaying the selection
	link: new DynamicValue('#e78c01', '#ffd18a'),
	highlightBack: new DynamicValue('#caebff', '#1b86ff'), //for the background of selection block
	highlightFront: new DynamicValue('#1b86ff', '#caebff'), //for the text of selection block
	card: new DynamicValue('#ffd699', '#ffd699'), //for the background of cards
	simpleCard: new DynamicValue('#fff', '#444'),
}

export let colorCodes = light;

export const dynamicStyles = new DynamicStyleSheet({
	title_text: {
		fontSize: 14,
		marginTop: 10,
		marginBottom: 7,
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		color: dyColorCodes.text,
	},
	text: {
		color: dyColorCodes.text,
	},
	titleText: {
		fontSize: 18,
		fontWeight: 'bold',
		color: dyColorCodes.text,
	},
	paragraph: {
		marginVertical: 8,
		lineHeight: 20,
	},
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: dyColorCodes.back,
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
	},
	input: {
		borderColor: '#777',
		borderBottomWidth: 1,
		padding: 8,
		margin: 10,
		width: 250,
		color: dyColorCodes.text,
	},
	inputBox: {
		padding: 8,
		margin: 10,
		width: 250,
		color: dyColorCodes.text,
    },
	buddyCardTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		color: dyColorCodes.cardText,
		marginLeft: 60,     //60 value used as a position over to make up for the profile picture
	},
	buddyCardText: {
		fontSize: 14,
		color: dyColorCodes.cardText,
		marginLeft: 60,
	},
	buddyDisplayContainer: {      //used to display the buddy cards on the buddies page
		flex: 1,
		backgroundColor: dyColorCodes.front,
		alignItems: 'stretch',
		justifyContent: 'center',
	},
	aboutHeader: {
		paddingBottom: 10,
		fontWeight: 'bold',
		fontSize: 18,
		justifyContent: 'center',
		color: dyColorCodes.text,
	},
	aboutText: {
		paddingBottom: 20,
		fontSize: 14,
		justifyContent: 'center',
		color: dyColorCodes.text,
	},
	loginButtonText: {
		fontWeight: 'bold',
		color: dyColorCodes.cardText,
		justifyContent: 'center',
	},
	aboutScrollView: {
		backgroundColor: dyColorCodes.back,
		padding: 20,
	},
	/*Profile page--------------------------------------------------*/
	wholePage: {
		flex: 1,
		backgroundColor: dyColorCodes.back,
	},
	profContainer: {
		flex: .4,
		alignItems: 'center',
		justifyContent: 'center',
	},
	userName: {
		fontSize: 27,
		fontWeight: 'bold',
		color: dyColorCodes.text,
		marginTop: 5,
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
		backgroundColor: dyColorCodes.back,
		alignItems: 'center',
		justifyContent: 'flex-start',
		height: '100%',
		paddingTop: 30,
	},
	loginText: {
		paddingTop: 30,
		paddingBottom: 10,
		fontSize: 16,
		color: dyColorCodes.text,
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
	signUpHabitContainer: {
		flex: 1,
		backgroundColor: dyColorCodes.back,
		alignItems: 'center',
	},
	pickerContainer: {
		height: 40,
		width: 245,
		borderBottomWidth: 1,
		borderColor: '#777',
		justifyContent: 'space-around',
	}
});

export const globalStyles = StyleSheet.create({
	titleText: {
		fontSize: 18,
		fontWeight: 'bold',
		color: colorCodes.text,
	},
	cardTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		color: colorCodes.cardText,
	},
	paragraph: {
		marginVertical: 8,
		lineHeight: 20,
	},
	container: {
		flex: 1,
		padding: 10,
		backgroundColor: colorCodes.back,
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
	},
	input: {
		borderColor: '#777',
		padding: 8,
		margin: 10,
		width: 200,
		color: colorCodes.text,
	},
	buddyCardTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		color: colorCodes.cardText,
		marginLeft: 60,     //55 value used as a position over to make up for the profile picture
		marginRight: -5,
	},
	buddyCardText: {
		fontSize: 14,
		color: colorCodes.cardText,
		marginLeft: 60,
		marginRight: -5,
	},
	buddyDisplayContainer: {      //used to display the buddy cards on the buddies page
		flex: 1,
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
		color: colorCodes.cardText,
		fontSize: 18,
		justifyContent: 'center',
	},
	aboutScrollView: {
		padding: 20,
		backgroundColor: colorCodes.back,
	},
	/*Profile page--------------------------------------------------*/
	wholePage: {
		flex: 1,
		backgroundColor: colorCodes.back,
	},
	profContainer: {
		flex: .4,
		alignItems: 'center',
		justifyContent: 'center',
	},
	userName: {
		fontSize: 27,
		fontWeight: 'bold',
		color: colorCodes.text,
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
	passwordIcon: {
		// textAlign: 'right',
		// paddingRight: 20,
		// paddingBottom: 10,
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
	EditProfileButtonContainer: {
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
		justifyContent: 'center',
	},
	loginContainer: {
		backgroundColor: colorCodes.back,
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
	},
	loginText: {
		paddingTop: 30,
		paddingBottom: 20,
		fontSize: 16,
		color: colorCodes.text,
	},
	loginButtonContainer: {
		borderRadius: 10,
		width: 200,
		height: 50,
		backgroundColor: '#ffd699',
		shadowOffset: { width: 1, height: 1 },
		shadowColor: '#333',
		shadowOpacity: 0.3,
		shadowRadius: 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonPlacement: {
		marginTop: 'auto',
		marginBottom: 20,
		justifyContent: 'center',
		alignItems: 'center',
		bottom: 0, //Here is the trick
	},
	emptyHabitContainer: {
		flex: 1,
		backgroundColor: colorCodes.back,
		alignItems: 'center',
	},
	picker: {
		fontSize: 16,
		color: colorCodes.text,
		height: 30,
		width: 250,
		padding: 8,
		borderWidth: 1,
		borderColor: '#777',
		alignContent: 'flex-end',
	}
});
