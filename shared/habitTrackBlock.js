import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity, SafeAreaView, } from 'react-native';
import { DynamicValue, DynamicStyleSheet } from 'react-native-dynamic';
import { dyColorCodes } from '../styles/global'

let data;
let streak = 0;
let hstreak = 0;

export default class HabitTrackBlock extends Component {

    //The constructor takes in props passed from outside and sets the default selected days to be none
    constructor(props) {
        super(props);

        data = props.data;
        this.state = {
            lastSelect: '',
            theme: props.theme,
        };
    }

    static getDerivedStateFromProps(nextProps) {
        return {
            theme: nextProps.theme
        }
    }

    //This function is called when a user taps on one of the days
    onPressAction = (item) => {
        item.select = !item.select;
        this.setState({ lastSelect: (item.day + item.select).toString()});
        console.log(`Highest Streak- ${hstreak}`);
    };

    //renderRow renders each row for the selection
    renderRow = (item) => {
        const dyStyles = styles[this.state.theme];
        const isSelected = item.select; //checks if the rendering item is selected
        //console.log(`Rendered item - ${item.day} for ${isSelected} ${streak}`); //logs what is selected
        if (isSelected == true) {
            streak = streak + 1;
            hstreak = streak; //let the hstreak(highest streak) be the final streak
        } else {
            streak = 0;
        }
        //change background color depending on whether the day is selected or not
        const bgColor = item.select ? {backgroundColor: selectedBlock[this.state.theme] } 
            : {backgroundColor: unselectedBlock[this.state.theme]};

        return (
            <TouchableOpacity onPress={() => this.onPressAction(item)}>
                <View style={[bgColor, dyStyles.cell]}>
                    <Text style={dyStyles.text}>{item.day}</Text>
                </View>
            </TouchableOpacity>                
        );
    }

    render() {
        return (
            //takes the data passed in and renders each item in the list using renderRow
            <SafeAreaView style={styles.container}>
                <FlatList 
                    data={data}
                    renderItem={({ item }) => (
                        this.renderRow(item)
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={false}
                    numColumns= {7}
                    columnWrapperStyle={{ marginTop: 10}}
                    width= {'100%'}
                />
                <Text style={{top: -20, color: dyColorCodes.text[this.state.theme]}}>
                    My Streak: {hstreak}
                </Text>

            </SafeAreaView>
        );
    }
}

const unselectedBlock = new DynamicValue('#D3D3D3', '#535353')
const selectedBlock = new DynamicValue('#ffd699', '#cc7a00')

const styles = new DynamicStyleSheet({
    cell: {
        height: 40, 
        width: 40, 
        margin: 5,
        flex: 1,
        flexDirection: 'column',
        alignItems:'center', 
        justifyContent:'center'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    text:{
        fontSize: 15,
        color: dyColorCodes.text,
    },
}); 

