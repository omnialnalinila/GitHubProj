import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [text, onNameInput] = useState(
     'Add text to add something to your list!'
  )
  const [cats, setCat] = useState([
    {name: 'panko'},
  ])

  const addToList = () => {
    console.log(text)
    setCat([{name: text}, ...cats])
  }

  const debug = () => {
    console.log(cats[0].name)
  }

  return (
    <SafeAreaView>
      <Button title = {text} onPress={addToList}/>
      <Button title = 'Test' onPress={debug}/>

      <TextInput
        style={styles.input}
        onChangeText={onNameInput}
        placeholder = "enter cat name!! :D"
      />
      <View style={styles.kitties}>
        <FlatList
          data={cats}
          renderItem={(itemData) => {
              return <Text> {itemData.item.name} </Text>
          }}
        />
      </View>
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
  kitties: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 3,
  },
});
