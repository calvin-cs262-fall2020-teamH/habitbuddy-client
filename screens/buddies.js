import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { useDynamicValue } from 'react-native-dynamic';
import { dynamicStyles } from '../styles/global';
import Card from '../shared/card';

// Written by Andrew Baker

export default function Buddies({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://habit-buddy.herokuapp.com/buddies/1') //Change this once we have local storage of a active user
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);


    const [buddies, setBuddies] = useState([

        // Basic static user data, used until backend is developed.
        {name: 'Andrew Baker', category: 'Spiritual', goal: 'I want to attend chapel twice a week', hobby: 'Reading', email: 'coolguy@yeet.com', number: 1234573885, pic: 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/59745462_102655627622924_4862557033871704064_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=ET9UNrS141EAX_2jGtR&_nc_ht=scontent-ort2-2.xx&oh=994cc5b7cf569e9e9791c019efabc7c6&oe=5FCAC2E0', key: '1'},
        {name: 'Dawson Buist', category: 'Education', goal: 'I want to read one book every week', hobby: 'Hacking', email: 'coolguy@yeet.com', number: 1234573885, pic: 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/104948192_4184601054913338_953146845638702540_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=7hwMelyT4SUAX9Bp9C0&_nc_ht=scontent-ort2-2.xx&oh=d51a7304d76517e63252d30b02fdb9e4&oe=5FC86C3A', key: '2'},
        {name: 'Kelsey Yen', category: 'Spiritual', goal: 'I want to rest every day for an hour', hobby: 'Engineering', email: 'coolguy@yeet.com', number: 1234573885, pic: 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/48361196_2323280584559505_806143671874355200_n.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=Vsd6KMQHRwoAX8Jwzit&_nc_ht=scontent-ort2-2.xx&oh=b0df354626d6db23c6e2d011ca9c7171&oe=5FC87E95', key: '3'},
        {name: 'Belina Sainju', category: 'Leisure', goal: 'I want to watch TV every day', hobby: 'Reading', email: 'coolguy@yeet.com', number: 1234573885, pic: 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/94386001_3052697268125747_8543896262028558336_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=HB2iMgmeyiMAX-xH8b0&_nc_ht=scontent-ort2-2.xx&oh=80085c34f488d26877a9d5e5cebc7074&oe=5FC74D3E', key: '4'},
        {name: 'Joe Pastucha', category: 'Leisure', goal: 'I want to watch 2 movies every week', hobby: 'Sleeping', email: 'coolguy@yeet.com', number: 2314573885, pic: 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/49411157_2482634981749821_1257420489870016512_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=VpIkl5ZG6WwAX-oBa9c&_nc_ht=scontent-ort2-2.xx&oh=89e58d115252bffe32dc7fa71a09a703&oe=5FC99EE5', key: '5'},
        {name: 'Nathan Strain', category: 'Spiritual', goal: 'I want to meditate daily', hobby: 'School', email: 'coolguy@yeet.com', number: 1234573885, pic: 'https://moodle.calvin.edu/pluginfile.php/1229007/user/icon/fordson/f1?rev=42095108', key: '6'},

    ]);

    const dyStyles = useDynamicValue(dynamicStyles);

    return (
        <View style={dyStyles.buddyDisplayContainer}>
            <FlatList data={data}
                      keyExtractor={({ id }, index) => id}
                      renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('BuddyDetails',
                    {id: item.id,
                    firstname: item.firstname,
                    lastname: item.lastname,
                    emailaddress: item.emailaddress,
                    phone: item.phone,
                    profileurl: item.profileurl,
                    hobby: item.hobby,
                    category: item.category,
                    habitgoal: item.habitgoal}
                    )}>
                    {/* Allows for traversal into the buddy details page */}
                    <Card style={{height: 100, marginHorizontal: 20}}>  
                        {/* uri allows the app to search the url for the image needed. Width and height information are necessary for the pictures to function. Will not work without. */}
                        <Image source = {{uri: item.profileurl}} style = {{width: 60, height: 60, position: 'absolute', borderRadius: 6, marginLeft: -5, top: 0}}/>

                        {/* image width and height 50 by 50. position absolute to keep picture and text in the same line. basic user profile */}
                        <Text style={dyStyles.buddyCardTitle}>{ item.firstname } {item.lastname}</Text>
                        <Text style={dyStyles.buddyCardText}>{ item.habitgoal }</Text>
                    </Card>
                </TouchableOpacity>
            )}/>
        </View>
    );
} 
