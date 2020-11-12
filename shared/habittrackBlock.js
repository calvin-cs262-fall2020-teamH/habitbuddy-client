import { TextareaAutosize } from '@material-ui/core';
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView, } from 'react-native';

let data;

export default class HabittrackBlock extends Component {

    //The constructor takes in props passed from outside and sets the default selected days to be none
    constructor(props) {
        super(props);

        data = props.data;
        this.state = {
            lastSelect: '',
        };
    }

    //This function is called when a user taps on one of the days
    onPressAction = (item) => {
        item.select = !item.select;
        this.setState({ lastSelect: (item.day + item.select).toString()});
    };

    //renderRow renders each row for the selection
    renderRow = (item) => {
        const isSelected = item.select; //checks if the rendering item is selected
        console.log(`Rendered item - ${item.day} for ${isSelected}`); //logs what is selected

        //change background color depending on whether the day is selected or not
        const bgColor = item.select ? {backgroundColor: "#ffd699" } : {backgroundColor: "#D3D3D3"};

        return (
            <TouchableOpacity onPress={() => this.onPressAction(item)}>
                <View style={[bgColor, styles.cell]}>
                    <Text style={styles.text}>{item.day}</Text>
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
                    columnWrapperStyle={{ marginTop: 10 }}
                    width= {'100%'}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
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
        color: '#333',
    },
}); 
