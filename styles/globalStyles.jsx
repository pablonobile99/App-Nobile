import { StyleSheet, Text, View } from 'react-native'

export const globalStyles = StyleSheet.create({
    conteiner: {
      flex: 1,
    },
    conteinerbackGround: {
      flex: 1,
      backgroundColor: "blue",
      borderRadius: 15,
      paddingVertical: 80,
      paddingHorizontal: 50,
      overflow: "hidden",
      /* marginVertical: 50,
      marginHorizontal: 15, */
      /* borderWidth: 5,
      borderColor: "#047723" */
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