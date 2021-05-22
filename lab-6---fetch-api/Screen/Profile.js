//BSCS 3-2
//Ian Lumactod
//John Christian Tagare
//Jhon Carl So

import React from 'react';
import { Entypo } from '@expo/vector-icons';
import {
  ImageBackground,
  View,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  Text,
} from 'react-native';

const Profile = ({ route, navigation }) => {
  const data = route.params;

  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground style={styles.background} source={require('../assets/abstract-background-1.jpg')}>
          <Image style={styles.image} source={{ uri: data.picture.large }} />
          <Text style={styles.text1}> {' '}{data.name.first} {data.name.last} </Text>

          <Text style={styles.about}>
            {'\n\n'}
            <Entypo name="user" size={20} color="white" /> About {'\n\n'}
             Age: {data.dob.age} {'\n\n'}
            Birthday: {data.dob.date} {'\n\n'}
            Gender: {data.gender} {'\n\n'}
            <Entypo name="address" size={20} color="white" />Address: {data.location.street.number}, {data.location.street.name},{'\n '}
            {data.location.state}, {data.location.country}{'\n\n'}
            <Entypo name="mail" size={20} color="white" />
            Contact {'\n\n'}
            Email: {data.email} {'\n'}
            Phone: {data.phone} {'\n\n'}
            <Entypo name="dots-three-horizontal"size={20}color="white"/>{' '}
            Others {'\n'}
            Date Registered: {data.registered.date}
          </Text>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

export default Profile;
const styles = StyleSheet.create({
  text1: {
    textAlign: 'center',
    fontWeight: 'Bold',
  },
  container:{
    flex: 1,
    alignItems: 'center'
  },
  image: {
    padding: 100,
    width: 250,
    height: 250,
    outlineColor: 'black'

  },
  about: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Times New Roman',
    color: 'white',
    outlineStyle: 'solid',
    outlineColor: '#000000',
    outlineWidth: 1,
  },
  background: {
    padding: 100,
    scale: 100,
    flex: 1,
    alignItems: 'center',
    
  },
});
