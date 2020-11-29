import { TextareaAutosize } from '@material-ui/core';
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView, } from 'react-native';
import { DynamicStyleSheet, DynamicValue } from 'react-native-dynamic';
import { colorCodes, dyColorCodes } from '../styles/global';


let data;
let hstreak = 0;
let lastBlock = false;

export default class HabittrackBlock extends Component {



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
        this.setState({ lastSelect: (item.day + item.select).toString() });
        if (!this.props.data[0].select) {
            hstreak = 0;
        }

        // Adds streak if each block in a row is selected
        this.props.data.forEach(element => {
            if (element.select) {
                if (!lastBlock) {
                    hstreak = 1;
                }
                else {
                    hstreak += 1;
                }
            }
            lastBlock = element.select;
        });

    };

    //renderRow renders each row for the selection
    renderRow = (item) => {
        const dyStyles = styles[this.state.theme];
        const isSelected = item.select; //checks if the rendering item is selected
        console.log(`Rendered item - ${item.day} for ${isSelected}`); //logs what is selected
        console.log(`Highest Streak- ${hstreak}`); //logs highest streak

        //change background color depending on whether the day is selected or not
        const bgColor = item.select ? {backgroundColor: selectedBlock[this.state.theme] } 
        : {backgroundColor: unselectedBlock[this.state.theme]};

        return (
            // Creates a cell for each day
            <TouchableOpacity onPress={() => this.onPressAction(item)}>
                <View style={[bgColor, dyStyles.cell]}>
                    <Text style={dyStyles.text}>{item.day}</Text>
                </View>
            </TouchableOpacity>

        );
    }

    render() {
        const dyStyles = styles[this.state.theme];
        return (
            //takes the data passed in and renders each item in the list using renderRow
            <SafeAreaView style={dyStyles.container}>
                <View style={{ flex: 1, borderRadius: 5, alignItems: 'center', justifyContent: 'center', borderBottomWidth: 0.5, borderBottomColor: 'gray', shadowRadius: 5 }}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            this.renderRow(item)
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal={false}
                        numColumns={7}
                        columnWrapperStyle={{ marginTop: 10 }}
                        width={'100%'}
                        scrollEnabled={false}
                    />
                </View>
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
        marginTop: -1,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,

    },
    text: {
        fontSize: 15,
        color: dyColorCodes.text,
    },

}); 