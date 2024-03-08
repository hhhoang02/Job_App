import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Back from './Back'

const SettingScreen = ({navigation}:any) => {
  return (
    <View>
        <Back navigation={navigation} />
    </View>
  )
}

export default SettingScreen

const styles = StyleSheet.create({})