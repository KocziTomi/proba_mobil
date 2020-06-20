import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, Alert, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Login({ navigation }) {

  const [emailOutput, setEmail] = useState("")
  const [passwordOutput, setPassword] = useState("")
  const [token, setToken] = useState("")
  
  async function submit () {
    try {
      let response = await fetch('https://reqres.in/api/login', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
                    'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: emailOutput,
            password: passwordOutput
          })
      });

      let json = await response.json();
      
      if(typeof(json.error) == 'undefined'){
        setToken(json.token)
        navigation.navigate('Home')
        return;
      }
      else {
        throw json.error;
      }
    } catch (error) {
      alert(error);
    }    
  }

  return (
    
    <View style={styles.container}>
      <Image
        source= {require('../assets/logo.png')}
        style={styles.logo}
      />

      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        style={styles.input}
        onChangeText={text => setEmail(text)}
      />

      <TextInput
        placeholder="Password"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={submit}
      >
        <Text style={styles.button_text}>Login</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 40
  },
  input: {
    marginTop:10,
    marginBottom: 5,
    height: 40,
    width: 250, 
    padding: 5,
    borderColor: 'gray', 
    borderWidth: 1
  },
  button: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "#FF6347",
    width: 150,
    marginTop: 10
  },
  button_text:{
    color:'#fff'
  }

});
