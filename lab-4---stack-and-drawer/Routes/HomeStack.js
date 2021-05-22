import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screen/Home';
import Profile from '../Screen/Profile';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
const HomeStack = () => {
  return(
      <Stack.Navigator>
        <Stack.Screen name = "Home" component={Home}/>
        <Stack.Screen name = "Profile" component={Profile} />
      </Stack.Navigator>

  );
}

export default HomeStack;
