import { useState } from 'react';
import { Button, Image, Text, TextInput, View, StyleSheet, ScrollView, FlatList, TouchableOpacity, Alert, Modal, ImageBackground } from 'react-native';
import { basicStyles, globalStyles } from './styles/globalStyles';
import { productos } from './asynmock';

import "./global.css";

import React from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Base from './componentes/Base';
import FondoManejador from './componentes/FondoManejador';


export default function App() {

  /* const [imgFondo, setImgFondo] = useState(require("./assets/fondo.png"));
  const [stateFondo, setStateFondo] = useState(1)

  const manejadorFondo = () => {
    if (stateFondo == 1) {
      setImgFondo(require("./assets/fondoAzul.png"))
      setStateFondo(2)
    }
    if (stateFondo == 2) {
      setImgFondo(require("./assets/fondo.png"))
      setStateFondo(1)
    }
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
  } */

  

  /*---------- INICIO APP NUEVA -------------------------------------- */
  

  return (
    <View style={basicStyles.conteiner}>
      {/* <View style={{flex:1}}>
        <Base>
          <Text>asd</Text>
        </Base>
      </View> */}
      {/* <ImageBackground source={imgFondo} resizeMode="cover" style={globalStyles.conteinerbackGround}>
        <TextInput
          value={textItem}
          onChangeText={handleChangeText}
          style={globalStyles.input}
        />

        <TouchableOpacity onPress={manejadorFondo} style={globalStyles.btnFondo}>
          <Text>
            FONDO
          </Text>
        </TouchableOpacity>


        <Button title='Agregar' color="blue" onPress={addItem} />


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
      </ImageBackground> */}
      <FondoManejador>
        <Text>
          asdasdasdasdasda
        </Text>
      </FondoManejador>
      
    </View>
  );
}
