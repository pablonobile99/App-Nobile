import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native'


const Base = ({ children }) => {

    const {height, width, scale, fontScale} =useWindowDimensions()

    return (
        <View style={{ height: 500, backgroundColor: "#ccfa81", padding: 40 }}>
            <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat accusamus autem maxime facere nobis rerum itaque, magnam officia. Neque quo iure praesentium, quasi culpa error ad voluptas cumque quas dicta!</Text>
            <View>
                {children}
                
            </View>
            <Text>
                {width}x{height} - scala: {scale} - fontscale: {fontScale}
            </Text>
        </View>
    )
}

export default Base

const styles = StyleSheet.create({})