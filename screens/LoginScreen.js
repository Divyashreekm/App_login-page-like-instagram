import { StyleSheet, Text, View ,Image, TextInput, TouchableOpacity} from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {auth } from "../firebase"
const LoginScreen = () => {
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation();

    useEffect (() =>{
        const unsubcribe = auth.onAuthStateChanged( user => {
            if (user )  {
                navigation.navigate("HomeScreen")
            }
        })
        return unsubcribe
    }, [])
    const handleSignUp = () => {
        auth
        .createUserWithEmailAndPassword(email,password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('signed up with this account ', user.email);
        })
        .catch(error => alert(error.message))
    }

    const handleLogin = () => {
        auth
        .signInWithEmailAndPassword(email,password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log("signed in with this account", user.email);
        })
        .catch(error => alert(error.message))
    }
  return (
    <View>
    <View style={styles.cointainer}>
      <Image style={styles.logo} source={require('../assets/ai.png')} />
      <TextInput style={styles.text} placeholder='Email' value={email} onChangeText={text => setEmail(text)} />
      <TextInput style={styles.text} placeholder='Password' value={password} onChangeText={text => setPassword(text)} secureTextEntry />
    
    </View>
<View >
    <TouchableOpacity style={styles.button} onPress={handleLogin}>

    <Text style={styles.buttontext}> SignIN</Text>
    </TouchableOpacity >
    <TouchableOpacity style={styles.button2} onPress={handleSignUp}>
    <Text style={styles.buttontext1} > SignUp</Text>
    </TouchableOpacity>
</View>

    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    cointainer:{
        alignContent:"center"
    },
    logo: {
       
        width: 200,
        height: 120,
        alignSelf: "center",
    },
    text: {
        alignSelf: "center",
        backgroundColor: "white",
        paddingHorizontal: 16,
        paddingVertical: 11,
        borderRadius: 11,
        marginTop: 6,
        width: "80%"
    },
    button:{
        marginTop: 20,
        backgroundColor:"#B601F9",
        width: "60%",
        padding: 15,
        borderRadius:11,
        alignItems:"center",
        alignSelf:"center"
    },
    buttontext:{
        color: "white",
        fontWeight: '700',
        fontSize: 16,
    },
    buttontext1:{
        color: "#B601F9",
        fontWeight: '700',
        fontSize: 16,
        alignSelf:"center"
    },
    button2:{
        backgroundColor: "white",
        margin:5,
        borderColor:"#B601F9",
        borderWidth:2,
        width: "60%",
        alignSelf: "center",
        padding: 15,
        borderRadius:11,
    }
})