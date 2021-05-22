import React from 'react';
import {View,Button,StyleSheet,Text,ImageBackground} from "react-native";


const Profile = ({navigation}) => {
  return(
     <ImageBackground source={require('../assets/abstract-background-1.jpg')} 
                      style={styles.container}>
    
    <Text style={{fontFamily:"lucida calligraphy"}}> Computer Science Students: {'\n\n'} Ian Lumactod {'\n\n'} Christian Tagare {'\n\n'} Jhon Carl So {'\n\n'}{'\n\n'}
    </Text>

    <Button title = "Go Back" onPress={() => navigation.goBack()} />
    
    </ImageBackground>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
  
});