//BSCS 3-2
//Ian Lumactod
//John Christian Tagare
//Jhon Carl So
import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Pressable,
  TouchableOpacity,
  Button,
  StyleSheet,
  Image,
  ImageBackground
} from 'react-native';


const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  
  function fetchRandomData() {
    setLoading(true);
    fetch('https://randomuser.me/api')
      .then((response) => response.json())
      .then((json) => {
        setData(json.results[0]);
        console.log(json.results[0]);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }
  useEffect(() => {
    fetchRandomData();
  }, []);

  return (
    <ImageBackground style ={styles.background} source={require ('../assets/17545.jpg')}>
    {isLoading ? (
        <Text> loading.. </Text>
      ) : (
    <View style={styles.container}>
      
        <TouchableOpacity onPress={() => navigation.navigate('Profile', data)}>
          <Image style={styles.image} source={{ uri: data.picture.large }} />
          <Text style={styles.text} >
            Full Name:{'\n\n'}{data.name.first} {data.name.last}{'\n\n\n'}
          </Text>
        </TouchableOpacity>
      
      <Button style = {styles.button}
        title="Generate User"
        onPress={() => fetchRandomData()}
      />
    </View>
      )}
    </ImageBackground>
  );
};

export default Home;
const styles = StyleSheet.create({
  container:{
    padding: 100,
    alignItems: 'center'
  },
  image: {
    padding: 100,
    width: 300,
    height: 300,
    outlineColor: 'black'
  },
  text:{ 
    alignItems:'center', 
    textAlign: 'center',
    fontWeight: 'bold',
  },
  background: {
    flex: 1,
    alignItems: 'center',
  }
});
