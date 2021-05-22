import React from 'react';
import {View,Button,StyleSheet,Text,ImageBackground, Modal} from "react-native";

const Home = ({navigation}) => {
  return(
    <ImageBackground source={require('../assets/Unicorn5.jpg')} 
                      style={styles.container}>
    
    <Text style={{fontFamily:"arial"}}>
    What is Lorem Ipsum? {'\n\n\n'}
"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." {'\n\n'}{'\n\n'}{'\n\n'}
</Text>


    <Button title ="Profile" onPress = {() =>navigation.navigate('Profile')}/>
    </ImageBackground>
    
    
  );
}

export default Home;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
    
  }
  
});