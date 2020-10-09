import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { colorCodes } from '../styles/global'

const DATA = [
    {
      id: "0",
      title: "Light",
    },
    {
      id: "1",
      title: "Dark",
    },
];

  const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.block, style]}>
        <View style={styles.containerIcon}>
            <Ionicons name={'md-person'} size={24} color={colorCodes.text} />                
        </View>
        <View style={styles.containerText}>
            <Text style={styles.text}>
                {item.title}
            </Text>
        </View>          
        <View style={styles.containerArrow}>
            <Ionicons name="ios-arrow-forward" size={20} color={colorCodes.selected} styles={styles.arrow}/>
        </View>
    </TouchableOpacity>
  );

export default function SelectionBlock({icon, title, selected, page, navigation}) {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

        return (
            <Item
            item={item}
            onPress={() => setSelectedId(item.id)}
            style={{ backgroundColor }}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
            />
        </SafeAreaView>
    );
    // return (
    //     <View style={styles.container}>
    //         <TouchableOpacity onPress= { //Makes the blocks interactable
    //             () => navigation.navigate(page, {name: {title}})} style={styles.block}>
                
    //             <View style={styles.containerIcon}>
    //                 <Ionicons name={icon} size={24} color={colorCodes.text} />                
    //             </View>
    //             <View style={styles.containerText}>
    //                 <Text style={styles.text}>
    //                     {title}
    //                 </Text>
    //             </View>          
    //             <View style={styles.containerSelection}>
    //                 <Text style={{textAlign: "right", paddingRight: 15, color: colorCodes.selected}}>
    //                     {selected}
    //                 </Text>
    //             </View>
    //             <View style={styles.containerArrow}>
    //                 <Ionicons name="ios-arrow-forward" size={20} color={colorCodes.selected} styles={styles.arrow}/>
    //             </View>
    //         </TouchableOpacity>
    //     </View>
    // );
};

const styles = StyleSheet.create({
    block: { 
        flexDirection: 'row', 
        flexBasis: '100%',
    },
    container: {
        display: 'flex', 
        height: 55,
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: colorCodes.front,
    },
    containerIcon: {
        flex: .1,
    },
    containerText: {
        flex: .85,
        paddingVertical: 3,
    },
    containerArrow: {
        flex: .05,
        position: "absolute",
        right: 5,
        paddingVertical: 3,
    },
    text: {
        color: colorCodes.text,
    }
});