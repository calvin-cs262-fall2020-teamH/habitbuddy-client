import React from 'react';

//https://medium.com/fullstacked/create-a-global-state-with-react-context-564524fc3b6c

const globalState = {
    name: 'Andrew Baker',
    category: 'Spiritual',
    goal: 'I want to attend chapel twice a week',
    email: 'email@gmail.com',
    pic: '../assets/images/george.jpg',
    key: 1,
};
  
const globalStateContext = React.createContext(globalState);

const GlobalState = React.createContext([{    name: 'Andrew Baker',
category: 'Spiritual',
goal: 'I want to attend chapel twice a week',
email: 'email@gmail.com',
pic: '../assets/images/george.jpg',
key: 1,}, () => {}]);

export default GlobalState;