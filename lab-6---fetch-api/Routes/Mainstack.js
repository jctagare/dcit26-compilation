import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { Ionicons,AntDesign,FontAwesome5,MaterialCommunityIcons  } from '@expo/vector-icons';
import HomeStack from './HomeStack';




const Drawer = createDrawerNavigator();

const MainNavigator = () =>{
  return(
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name = "Home" component={HomeStack} 
        options={{
          title: 'Home',
          drawerIcon: ({focused, size}) => (
            <AntDesign name="home" size={24} color="black" />
             ),
        }}/>
        
      </Drawer.Navigator>
    </NavigationContainer>

  );
}

export default MainNavigator;
