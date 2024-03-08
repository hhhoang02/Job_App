import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Back = ({navigation}:any) => {
  return (
    <View>
        <Pressable style={styles.button} onPress={() => navigation.goBack()}>
            <Image  style={{width: 30, height: 30}} source={require('../Assets/Images/icon_back.png')}/>
        </Pressable>
    </View>
  )
}

export default Back

const styles = StyleSheet.create({
    button:{
        padding: 10,
        width: '100%',
        height: 30,
    },

})