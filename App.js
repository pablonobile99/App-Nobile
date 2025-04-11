import { Button, Image, Text, TextInput, View, StyleSheet} from 'react-native'

export default function App() {
  let estiloTexto = {
    color: 'green'
  }
  let img = {
    width: 200,
    height: 200,

  }

  return (
    <View style={styles.conteiner}>
      <View style={{ height: 200, backgroundColor: 'blue' }}>
        <View style={{ height: 100, backgroundColor: 'red' }}>
          <Text style={estiloTexto}> ASDASDASDASD </Text>
        </View>
        <TextInput value={"texto para el imput"} placeholder='asd'/>
      </View>

      <Button title='PANQUEQUES' ></Button>

      <Image source={require("./assets/icon.png")} style={img}></Image>
      <Image source={{uri:"https://nancy.mx/cdn/shop/files/889E5B31-329F-4A46-A441-AE19FC8C7D02_cb622dc0-6513-4f9f-805d-a06c0e2c340d.jpg?v=1700864680&width=1445"}} style={img}></Image>

      
    </View>
  );
}


const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: "green",
    paddingTop: 34,
    borderRadius: 15,
    overflow: "hidden",
    marginTop: 50
  }
})