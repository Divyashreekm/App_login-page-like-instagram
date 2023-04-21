import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { auth } from '../firebase'

const HomeScreen = () => {
  const navigation = useNavigation()
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate("LoginScreen")
      })
      .catch(error=> alert(error.message))
  }
  return (
    <View>
      <Text> hey you signed in </Text>
        <Button title='signout' onPress={handleSignOut} /> 
      </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})