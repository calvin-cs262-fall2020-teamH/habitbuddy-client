import { TextareaAutosize } from '@material-ui/core';
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView, } from 'react-native';


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
        };
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
        const isSelected = item.select; //checks if the rendering item is selected
        //console.log(`Rendered item - ${item.day} for ${isSelected}`); //logs what is selected
        //console.log(`Highest Streak- ${hstreak}`); //logs highest streak
        //change background color depending on whether the day is selected or not
        const bgColor = item.select ? { backgroundColor: "#ffd699" } : { backgroundColor: "#D3D3D3" };

        return (
            // Creates a cell for each day
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
                    />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
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
        padding: 10
    },
    text: {
        fontSize: 15,
        color: '#333',
    },

}); 