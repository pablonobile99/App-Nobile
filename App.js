import { useState } from 'react';
import { Button, Image, Text, TextInput, View, StyleSheet, ScrollView, FlatList, TouchableOpacity, Alert, Modal } from 'react-native';
import { globalStyles } from './styles/globalStyles';
import { productos } from './asynmock';

import "./global.css";

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
    setTextItem(text)
  }

  const addItem = () => {
    console.log("add")
    console.log(textItem)
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
    Alert.alert("Cancelado");
  }

  const [itemSelected, setItemSelected] = useState({})

  const handleDeleteModal = (item) => {
    const filter = itemList.filter(item => item.id !== itemSelected.id)
    setItemList(filter)
    console.log("borrado")
    setModalVisible(false)
  }



  return (
    <View style={globalStyles.conteiner}>
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
        style={globalStyles.input}
      />

      <Button title='Agregar' color="red" onPress={addItem} />


      {/* <ScrollView>
        {
          itemList.map(item => (
            <View style={globalStyles.itemBlockConteiner}>
              <Text key={item.id}>
                {item.value}
              </Text>
            </View>
          ))
        }
      </ScrollView> */}
      

      <View style={globalStyles.lista}>
        <FlatList
          keyExtractor={(producto) => producto.id.toString()}
          data={itemList}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleModal(item)} style={globalStyles.itemBlockConteiner}>
              <Text>
                {item.value}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <Modal visible={modalVisible} animationType='slide' transparent={true}>
        <View style={globalStyles.modalContainer}>
          <View>
            <Text style={globalStyles.textContainer}>
              Estas seguro de borrar?
            </Text>
          </View>
          <View>
            <Text style={globalStyles.textContainer}>
              Producto: {itemSelected.value}
            </Text>
            <Text style={globalStyles.textContainer}>
              ID: {itemSelected.id}
            </Text>
          </View>
          <View style={globalStyles.btnContainer}>
            <Button title='Borrar' color="red" onPress={handleDeleteModal} />
            <Button title='Cancelar' color="green" onPress={handleCancelModal} />
          </View>

        </View>
      </Modal>
    </View>
  );
}
