import React from 'react';
import {View,Button,StyleSheet,Text,ImageBackground} from "react-native";

const image = { uri: "https://i.pinimg.com/originals/57/0a/28/570a285282346de5004586c30c49e973.jpg" };

const About = ({navigation}) => {
  return(
     <View style={styles.image}>
      <ImageBackground source={image} style={styles.image}>
      
    </ImageBackground>
    <Button title ="Back" onPress = {() => navigation.goBack()} />

    </View>
  );
}

export default About;


const styles = StyleSheet.create({
  image:{
          flex: 1,
    resizeMode: "cover",
 
    }
});