import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput,  TouchableOpacity} from 'react-native';
import Logo from '../assets/cubicfox_logo.svg';
import Constants from 'expo-constants';

export default function Login({ navigation }) {

  const [emailOutput, setEmail] = useState("")
  const [passwordOutput, setPassword] = useState("")
  const [token, setToken] = useState("")
  const [loggingIn, setLoggingIn] = useState(false)
  


  async function submit () {
    try {
      setLoggingIn(true);
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
        setToken(json.token);
        setLoggingIn(false);
        navigation.navigate('Home');
        return;
      }
      else {
        throw json.error;
      }
    } catch (error) {
      setLoggingIn(false);
      alert(error);  
    }    
  }

  return (
    <View style={styles.container}>

      <Logo style={styles.logo} width={150} height={120} />

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
        disabled={loggingIn}
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
    marginTop: Constants.statusBarHeight,
  },
  logo: {
    marginBottom: 40,
    marginTop:50
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
    marginTop: 25
  },
  button_text:{
    color:'#fff'
  },

});
