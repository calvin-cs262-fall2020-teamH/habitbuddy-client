import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { dyColorCodes } from '../../styles/global'
import { DynamicStyleSheet } from 'react-native-dynamic';

{/* Sample code taken and modified from https://www.thetopsites.net/article/53403612.shtml */}
export default class SelectionBlock extends Component {
    
    //The constructor takes in props passed from outside and sets the default selected item (Light)
    constructor(props) {
        super(props);

        this.state = {
            selectedItem: props.selectedId,
            title: props.data[props.selectedId].title.toLowerCase(),
        };
    }

    //This function is called when a user taps one of the blocks
    onPressAction = (rowItem) => {
        console.log('ListItem was selected');
        console.dir(rowItem);
        this.setState({
            selectedItem: rowItem.id,
            title: rowItem.title.toLowerCase(),
        });
        this.props.update(rowItem.title.toLowerCase())
    }

    //renderRow renders each row for the selection
    renderRow(item) {
        const isSelected = this.state.selectedItem === item.id; //checks if the rendering item is selected
        console.log(`Rendered item - ${item.title} for ${isSelected}`); //logs whether its selected
        
        const dyStyles = styles[this.state.title];

        //change style depending on whether the block is selected or not
        const viewStyle = isSelected ? dyStyles.selectedButton : dyStyles.normalButton;
        const textColor = isSelected ? {color: dyColorCodes.highlightFront[this.state.title], fontWeight: 'bold'} : {color: dyColorCodes.text[this.state.title]};
        const iconColor = isSelected ? dyColorCodes.highlightFront[this.state.title] : dyColorCodes.text[this.state.title];
    
        return (
            <TouchableOpacity style={[viewStyle, dyStyles.block]} onPress={() => this.onPressAction(item)} underlayColor='#dddddd'> 
                <View style={dyStyles.containerIcon}>
                    <Ionicons name={item.icon} size={24} color={iconColor} />
                </View>
                <View style={dyStyles.containerText}>
                    <Text style={textColor}>
                        {item.title}
                    </Text>
                </View>
                <View style={dyStyles.containerArrow}>
                    {isSelected ? 
                        <Ionicons name="md-checkmark" size={20} color={dyColorCodes.highlightFront[this.state.title]} />
                        : null
                    }
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            //takes the data passed in and renders each item in the list using renderRow
            <FlatList style={{display: 'flex', height: 55, flexDirection: 'row',}}
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

const styles = new DynamicStyleSheet({
    block: {
        flexDirection: 'row',
        flexBasis: '100%',
        paddingHorizontal: 20,
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
        backgroundColor: dyColorCodes.highlightBack,
    },
    normalButton: {
        backgroundColor: dyColorCodes.front,
    },
});