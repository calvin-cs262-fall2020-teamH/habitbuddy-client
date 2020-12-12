import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { useDynamicValue } from 'react-native-dynamic';
import { dynamicStyles } from '../styles/global';
import Card from '../shared/card';
import CommonDataManager from '../data/CommonDataManager';

// Written by Andrew Baker

/** About outputs the content of the About page 
 * @author Andrew Baker (andrewJamesBaker)
 * @param {any} navigation
 * @return {Card} Buddies cards that are touchable to navigate to buddyDetails
 */
export default function Buddies({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    let [deleted, setDeleted] = useState(-1);

    let commonData = CommonDataManager.getInstance();

    
    function deleteBuddy() {
        fetch('https://habit-buddy.herokuapp.com/buddies/' + commonData.getUserID())
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }

    commonData.setDeleteBuddyBuddies(deleteBuddy);

    useEffect(() => {
        fetch('https://habit-buddy.herokuapp.com/buddies/' + commonData.getUserID())
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    //   setData()

    const dyStyles = useDynamicValue(dynamicStyles);

    return (
        <View style={dyStyles.buddyDisplayContainer}>
            <Text style={dyStyles.title_text}>Tap your buddy for more info!</Text>
            <FlatList data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('BuddyDetails', item)}>
                        {/* Allows for traversal into the buddy details page */}
                        <Card style={{ height: 100, marginHorizontal: 20 }}>
                            {/* uri allows the app to search the url for the image needed. Width and height information are necessary for the pictures to function. Will not work without. */}
                            <Image source={{ uri: item.profileurl }} style={{ width: 60, height: 60, position: 'absolute', borderRadius: 6, marginLeft: -5, top: 0 }} />

                            {/* image width and height 50 by 50. position absolute to keep picture and text in the same line. basic user profile */}
                            <Text style={dyStyles.buddyCardTitle}>{item.firstname} {item.lastname}</Text>
                            <Text style={dyStyles.buddyCardText}>{item.habit}</Text>
                        </Card>
                    </TouchableOpacity>
                )} />
        </View>
    );
} 
