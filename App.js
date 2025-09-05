import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [text, onChangeText] = useState(
     'Add text to add something to your list!'
  )
  const [cats, setCat] = useState([
    {name: 'panko'},
  ])

  const addToList = () => {
    setCat({name: text}, ...cats)
  }

  const debug = () => {
    console.log(cats[1].name)
  }

  return (
    <SafeAreaView>
      <Button title = {text} onPress={addToList}/>
      <Button title = 'Test' onPress={debug}/>

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder = "enter cat name!! :D"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
