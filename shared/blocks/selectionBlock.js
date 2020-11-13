import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {colorCodes} from '../../styles/global'

{/* Sample code taken and modified from https://www.thetopsites.net/article/53403612.shtml */}
export default class SelectionBlock extends Component {
    
    //The constructor takes in props passed from outside and sets the default selected item (Light)
    constructor(props) {
        super(props);

        this.state = {
            selectedItem: 0,
        };
    }

    //This function is called when a user taps one of the blocks
    onPressAction = (rowItem) => {
        console.log('ListItem was selected');
        console.dir(rowItem);
        this.setState({
            selectedItem: rowItem.id,
        });
    }

    //renderRow renders each row for the selection
    renderRow = (item) => {
        const isSelected = this.state.selectedItem === item.id; //checks if the rendering item is selected
        console.log(`Rendered item - ${item.title} for ${isSelected}`); //logs whether its selected
        
        //change style depending on whether the block is selected or not
        const viewStyle = isSelected ? styles.selectedButton : styles.normalButton;
        const textColor = isSelected ? {color: colorCodes.highlightFront, fontWeight: 'bold'} : {color: colorCodes.text};
        const iconColor = isSelected ? colorCodes.highlightFront : colorCodes.text;
        
        return (
            <TouchableOpacity style={[viewStyle, styles.block]} onPress={() => this.onPressAction(item)} underlayColor='#dddddd'> 
                <View style={styles.containerIcon}>
                    <Ionicons name={item.icon} size={24} color={iconColor} />
                </View>
                <View style={styles.containerText}>
                    <Text style={textColor}>
                        {item.title}
                    </Text>
                </View>
                <View style={styles.containerArrow}>
                    {isSelected ? 
                        <Ionicons name="md-checkmark" size={20} color={colorCodes.highlightFront} />
                        : null
                    }
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            //takes the data passed in and renders each item in the list using renderRow
            <FlatList style={styles.container}
                data={this.props.data}
                renderItem={({ item }) => (
                    this.renderRow(item)
                )}
                keyExtractor={(item, index) => index.toString()}
                style={{ marginTop: 0, height: '100%' }}
            />
        );
    }
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        flexBasis: '100%',
        paddingHorizontal: 20,
    },
    container: {
        display: 'flex',
        height: 55,
        flexDirection: 'row',
    },
    containerIcon: {
        flex: .1,
        paddingVertical: 15,
    },
    containerText: {
        flex: .85,
        paddingVertical: 18,
    },
    containerArrow: {
        flex: .05,
        position: "absolute",
        right: 5,
        paddingVertical: 18,
        paddingHorizontal: 20,
    },
    selectedButton: {
        backgroundColor: colorCodes.highlightBack,
    },
    normalButton: {
        backgroundColor: colorCodes.front,
    },
});