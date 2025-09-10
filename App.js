import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [nameText, onNameInput] = useState()
  const [raceText, onRaceInput] = useState()

  const [animals, setAnimal] = useState([
    {name: 'Panko', species: 'feline'},
    {name: 'Haru Urara', species: 'horse'}
  ])

  const addToList = () => {
    console.log(nameText, raceText)
    if(nameText == undefined && raceText == undefined){
      setAnimal([{name: 'Uni', species: 'Feline'}, ...animals])
    } else if(nameText == undefined && raceText != undefined) {
      setAnimal([{name: 'Uni', species: 'Feline'}, ...animals])
    } else if(raceText == undefined && nameText != undefined) {
      setAnimal([{name: 'Uni', species: 'Feline'}, ...animals])
    } else if(nameText === null && raceText === null){
      setAnimal([{name: 'Uni', species: 'Feline'}, ...animals])
    } else {
      setAnimal([{name: nameText, species: raceText}, ...animals])
    }
  }

  const debug = () => {
    console.log(nameText, raceText)
  }

  return (
    <SafeAreaView>
      <Button title = "Press this to add your animal!" onPress={addToList}/>
      <Button title = "debug button" onPress={debug}/>

      <TextInput
        style={styles.input}
        onChangeText={onNameInput}
        placeholder = "enter animal name!! :D"
      />
      <TextInput
        style={styles.input}
        onChangeText={onRaceInput}
        placeholder = "enter animal species!! :D"
      />

      <View style={styles.boxes}>
        <FlatList
          data={animals}
          renderItem={(itemData) => {
              return <Text style={styles.kitties}> {itemData.item.name}, {itemData.item.species} </Text>
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
    borderWidth: 3,
    alignItems: 'center',
    height: 70,
    fontSize: 50,
    marginBottom: 20,
  },
  boxes: {
    padding: 50,
    alignItems: 'center',
  }
});
