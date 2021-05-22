import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, FlatList} from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(1);

  const InputHandler = (InputedTxt) => {
    setName(InputedTxt);
  };

  const AddInputHandler = () => {
    setCount(count + 1);
    setItems((currentInput) => [...currentInput,{key: Math.random(),value:name}]);
    setName('');
  };

  return (
    <View style={styles.container1}>
      <View style={styles.container2}>
        <TextInput
          placeholder="Enter Item"
          style={styles.item}
          onChangeText={InputHandler}
          value={name}
        />
        <Button title="ADD" onPress={AddInputHandler} />
      </View>

      <FlatList
        data={items}
        renderItem={(dbItem) => (
          <View style={styles.listItems}>
            <Text style={{color:'white'}}> {dbItem.item.value} </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    padding: 30,
  },
   container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    width: '70%',
  },

  listItems: {
    backgroundColor: 'gray',
    padding: 5,
    margin: 5,
  },
});
