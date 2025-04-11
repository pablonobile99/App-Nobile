import { useState } from 'react'
import { Button, Image, Text, TextInput, View, StyleSheet, ScrollView } from 'react-native'


const productos = [
  { id: 1, value: "objeto uno" },
  { id: 2, value: "objeto dos" },
  { id: 3, value: "objeto tres" },
  { id: 4, value: "objeto cuatro" },
  { id: 5, value: "objeto cinco" }
]


export default function App() {
  let estiloTexto = {
    color: 'green'
  }
  let img = {
    width: 200,
    height: 200,
  }

  const [textItem, setTextItem] = useState("");

  const handleChangeText = (text) => {
    console.log(text)
    setTextItem(text)
  }

  const addItem = () => {
    console.log("add")
  }

  const [itemList, setItemList] = useState(productos)


  return (
    <View style={styles.conteiner}>
      {/* <View style={{ height: 200, backgroundColor: 'blue' }}>
        <View style={{ height: 100, backgroundColor: 'red' }}>
          <Text style={estiloTexto}> ASDASDASDASD </Text>
        </View>
        <TextInput value={"texto para el imput"} placeholder='asd'/>
      </View>

      <Button title='PANQUEQUES' ></Button>

      <Image source={require("./assets/icon.png")} style={img}></Image>
      <Image source={{uri:"https://nancy.mx/cdn/shop/files/889E5B31-329F-4A46-A441-AE19FC8C7D02_cb622dc0-6513-4f9f-805d-a06c0e2c340d.jpg?v=1700864680&width=1445"}} style={img}></Image>
 */}

      <TextInput
        value={textItem}
        onChangeText={handleChangeText}
        style={styles.input}
      />

      <Button title='Agregar' color="red" onPress={addItem} />


      <ScrollView>
        {
          itemList.map(item => (
            <View style={styles.itemBlockConteiner}>
              <Text key={item.id}>
                {item.value}
              </Text>
            </View>
          ))
        }
      </ScrollView>

    </View>
  );
}


const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "green",
    padding: 50,
    borderRadius: 15,
    overflow: "hidden",
    marginTop: 50
  },
  input: {
    backgroundColor: "white"
  },
  itemBlockConteiner: {
    height: 500,
    width: 200,
    margin: 5,
    borderRadius: 10,
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
})