import { useState } from 'react'
import { Button, Image, Text, TextInput, View, StyleSheet, ScrollView, FlatList, TouchableOpacity, Alert, Modal } from 'react-native'


const productos = [
  { id: 1, value: "objeto 1" },
  { id: 2, value: "objeto 2" },
  { id: 3, value: "objeto 3" },
  { id: 4, value: "objeto 4" },
  { id: 5, value: "objeto 5" },
  { id: 6, value: "objeto 6" },
  { id: 7, value: "objeto 7" },
  { id: 8, value: "objeto 8" },
  { id: 9, value: "objeto 9" },
  { id: 10, value: "objeto 10" },
  { id: 11, value: "objeto 11" },
  { id: 12, value: "objeto 12" },
  { id: 13, value: "objeto 13" },
  { id: 14, value: "objeto 14" },
  { id: 15, value: "objeto 15" },
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
    setItemList(currentValue => [...currentValue, { id: Math.random().toString(), value: textItem }])
    setTextItem("")
  }

  const [itemList, setItemList] = useState(productos)

  const handleModal = (item) => {
    console.log(item)
    setItemSelected(item)
    setModalVisible(true)
  }

  const [modalVisible, setModalVisible] = useState(false)


  const handleCancelModal = (item) => {
    console.log("cancelado")
    setModalVisible(false)
  }

  const [itemSelected, setItemSelected] = useState({})

  const handleDeleteModal = (item) => {
    const filter = itemList.filter(item => item.id !== itemSelected.id)
    setItemList(filter)
    console.log("borrado")
    setModalVisible(false)
  }

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


      {/* <ScrollView>
        {
          itemList.map(item => (
            <View style={styles.itemBlockConteiner}>
              <Text key={item.id}>
                {item.value}
              </Text>
            </View>
          ))
        }
      </ScrollView> */}



      <View style={styles.lista}>
        <FlatList
          keyExtractor={(producto) => producto.id.toString()}
          data={itemList}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleModal(item)} style={styles.itemBlockConteiner}>
              <Text>
                {item.value}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <Modal visible={modalVisible} animationType='slide' transparent={true}>
        <View style={styles.modalContainer}>
          <View>
            <Text style={styles.textContainer}>
              Estas seguro de borrar?
            </Text>
          </View>
          <View>
            <Text style={styles.textContainer}>
              Producto: {itemSelected.value}
            </Text>
            <Text style={styles.textContainer}>
              ID: {itemSelected.id}
            </Text>
          </View>
          <View style={styles.btnContainer}>
            <Button title='Borrar' color="red" onPress={handleDeleteModal} />
            <Button title='Cancelar' color="green" onPress={handleCancelModal} />
          </View>

        </View>
      </Modal>
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
    height: 70,
    width: 200,
    margin: 5,
    borderRadius: 10,
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  lista: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  btnContainer: {
    flexDirection: "row",
    gap: 20,
  },
  textContainer: {
    fontWeight: "Bold",
  },
  modalContainer: {
    backgroundColor: "white",
    width: "80%",
    height: "20%",
    marginVertical: "40%",
    marginHorizontal: "10%",
    alignContent: "center",
    justifyContent: "center",
    gap: 20,
    paddingVertical: 20,
    borderRadius: 8,
  },
})