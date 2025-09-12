import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, FlatList, Pressable } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [nameText, onNameInput] = useState()
  const [speciesText, onRaceInput] = useState()
  const [keyCount, setKeyCount] = useState(3)

  const [animals, setAnimal] = useState([
    {name: 'Panko', species: 'Feline', key: 1},
    {name: 'Haru Urara', species: 'Horse', key: 2}
  ])
  const addToList = () => {
    debug();
    if(nameText == undefined || speciesText == undefined){
      setAnimal([{name: 'Uni', species: 'Feline', key: keyCount}, ...animals])
    } else if(nameText.length == 0 || speciesText.length == 0){
      setAnimal([{name: 'Uni', species: 'Feline', key: keyCount}, ...animals])
    } else {
      setAnimal([{name: nameText, species: speciesText, key: keyCount}, ...animals])
    }
    setKeyCount(keyCount+1);
  }
  function removeAnimal(toRemove) {
    console.log("This would have deleted something! :D")
    let newAnimals = animals.filter((animal) => {
      return animal.key !== toRemove.key
    });
    setAnimal(newAnimals)
  }
  const debug = () => {
    console.log('Name: "' + nameText + '", Species: "' + speciesText + '"');
    console.log(keyCount)
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
            return (
              <Pressable onPress={() => {
                removeAnimal(itemData.item);
              }}>
                <Text style={styles.elements}> {itemData.item.name}, {itemData.item.species} </Text>
              </Pressable>
            )
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
  elements: {
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
