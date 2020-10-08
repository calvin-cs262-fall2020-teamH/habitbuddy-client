// import React from 'react';
// import { StyleSheet, View, Text } from 'react-native';
// import { globalStyles } from '../styles/global';

// import Card from '../shared/card';
// import Profile from '../shared/profile';

// export default function BuddyDetails({ route, navigation }) {
//     return (
//         <View style={globalStyles.container}>
//             <Profile>
//                 <Text style={globalStyles.titleText}>{ route.params.name }</Text>
//                 <Text>Habits: { route.params.habit }</Text>
//                 <Text>Hobbies: { route.params.hobby }</Text>
//             </Profile>
//         </View>
//     );
// }

import React, { useState } from 'react';
import {StyleSheet, View, Text, FlatList, Image} from 'react-native';
import { globalStyles } from '../styles/global';
import ProfileCard from "../shared/profileCard";
import { MaterialIcons } from '@expo/vector-icons';


/* Profile outputs the content of the Profile page */
export default function BuddyDetails({route, navigation}) {

    const [profilePage, setProfilePage] = useState([
        { title: 'Name:', data: route.params.name, key: '1' },
        { title: 'Email:', data: route.params.email, key: '2' },
        { title: 'Habits:', data: route.params.habit, key: '3' },
        { title: 'Activities:', data: route.params.hobby, key: '4' },
    ]);

    return (
        
        <View style={styles.container}>
            <View style={styles.containerLeft}>
                <FlatList data={profilePage} renderItem={({ item }) => (
                    <ProfileCard styles={styles.contentHolder}>
                        <Text style={globalStyles.titleText}>{ item.title }  { item.data }</Text>
                    </ProfileCard>

                )} />
            </View>
            <View style={styles.containerRight}>
                <View style={styles.profilePic}>
                <Image source = {require('../assets/images/george.jpg')} style = {styles.profilePic}/> 
                    {/* <Text>Profile Pic</Text> */}
                </View>
            </View>
        </View>
    );
};

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    containerLeft: {
        flex: .6,
        flexDirection: 'column'
    },
    containerRight: {
        flex: .4,
        alignItems: 'center'
    },
    name: {
        fontSize: 24,
        marginLeft: 15,
        marginTop: 15
    },
    profilePic: {
        width: 125,
        height: 125,
        marginTop: 32,
        alignItems: 'center',
        borderRadius: 5,
        justifyContent: 'center',
        backgroundColor: "orange",
        position: 'absolute',
    },
    userEmail: {
        fontSize: 24,
        marginLeft: 15,
        marginTop: 15
    },
    titleText: {
        justifyContent: 'center'

    },
    cardItems: {
        justifyContent: 'center'
    },
    contentHolder: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: 'orange',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 7,
        marginVertical: 9,
    },
    leftIcon: {
        textAlign: 'right'
    }



})