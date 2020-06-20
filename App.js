import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, Alert, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import Login from './views/Login'
import Home from './views/Home'


export default function App() {

  const Stack = createStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  /*
  return (
    isSignedIn ? (
      <>
        <Stack.Screen name="Home" component={Home} />
      </>
    ) : (
      <>
        <Stack.Screen name="Login" component={Login} />
      </>
    )
  );*/

}
