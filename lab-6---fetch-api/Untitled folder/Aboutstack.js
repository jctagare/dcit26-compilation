import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';


//import About from '../Screen/About';
const Stack = createStackNavigator();

const Aboutstack = () => {
  return(
      <Stack.Navigator>
        <Stack.Screen name = "About" component={About} />
      </Stack.Navigator>
    

  );
}

export default Aboutstack;
