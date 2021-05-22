//BSCS 3-2
//Tagare, John Christian
//Lumactod, Ian Niño
//So, Jhon Carl

import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  SafeAreaView,
  Input,
} from 'react-native';

export default function App() {
  const [name, setName] = useState('');

  const [shouldShow, setShouldShow] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {shouldShow ? (
          <Text style={styles.text}> Hello {name} & Hello World</Text>
        ) : null}
        <Text>Hello</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter name"
          onChangeText={(val) => setName(val)}
        />
        <Button title="Print" onPress={() => setShouldShow(!shouldShow)} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: '8',
    margin: '10',
    width: '200',
    fontFamily: 'Poppins',
    fontWeight: 'Bold',
    fontSize: 15,
    color: '#white',
  },

  text: {
    fontFamily: 'Poppins',
    fontWeight: 'Bold',
    fontSize: 35,
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//backgroundColor:'#101010',
//alignItems: 'center',
//justifyContent: 'center'
//display:{
//  flex:1,
//alignItems: 'center',
//justifyContent: 'center'
//},
//<View style={styles.display}>
//const [value, onChangeText] = React.useState('Useless Placeholder');
//<TextInput
//style={styles.textbox}
//onChangeText={text => onChangeText(text)}
//value={value}
