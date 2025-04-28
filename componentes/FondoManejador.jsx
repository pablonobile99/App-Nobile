import { useState } from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { basicStyles } from '../styles/globalStyles';


const FondoManejador = ({ children }) => {

    const [imgFondo, setImgFondo] = useState(require(".././assets/fondo.png"));
    const [stateFondo, setStateFondo] = useState(1)

    const manejadorFondo = () => {
        if (stateFondo == 1) {
            setImgFondo(require(".././assets/fondoAzul.png"))
            setStateFondo(2)
        }
        if (stateFondo == 2) {
            setImgFondo(require(".././assets/fondo.png"))
            setStateFondo(1)
        }
    }

    return (
        <>
            <ImageBackground source={imgFondo} resizeMode="cover" style={basicStyles.conteinerbackGround}>
                <Button title='fondo' onPress={manejadorFondo}></Button>
                {children}
            </ImageBackground>
        </>
    )
}

export default FondoManejador

const styles = StyleSheet.create({})