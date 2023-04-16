import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppNavigater from './src/AppNavigater/AppNavigater'

const App = () => {
  return (
    <View style={styles.MainContainer}>
      <AppNavigater/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  MainContainer:{
    flex:1,
  }
})