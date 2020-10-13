import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colorCodes } from '../styles/global'

export default class BasicFlatList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedItem: 0,
        };
    }

    onPressAction = (rowItem) => {
        console.log('ListItem was selected');
        console.dir(rowItem);
        this.setState({
            selectedItem: rowItem.id,
        });
    }

    renderRow = (item) => {
        const isSelected = this.state.selectedItem === item.id;
        console.log(`Rendered item - ${item.title} for ${isSelected}`);
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