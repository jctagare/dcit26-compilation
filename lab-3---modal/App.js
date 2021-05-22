//BSCS 3-2
//LUMACTOD, IAN
//TAGARE, CHRISTIAN
//SO, JHON CARL
import  React,{useState} from 'react';
import {  View,StyleSheet,Button,Text,TouchableOpacity,ImageBackground,Image } from 'react-native';

import Samplemodal from './components/Samplemodal';

export default function App() {
  const[isModalOpen, setIsModalOpen] = useState(false);

  return (
    <View style={styles.container}>
    <Button title="Click me" onPress={() => setIsModalOpen(true)}/>
    <Samplemodal visible={isModalOpen} onClose= {() => setIsModalOpen(false)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
