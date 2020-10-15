import { StyleSheet } from 'react-native';

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
		paddingBottom: 10,
		fontWeight: 'bold',
		fontSize: 20,
		justifyContent: 'center',
		color: colorCodes.text,

	},
	aboutText: {
		paddingTop: 10,
		fontSize: 14,
		justifyContent: 'center',
		color: colorCodes.text,
	}
});
