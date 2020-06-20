import React from 'react';
import { SafeAreaView, View, VirtualizedList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import Item from '../components/ListItem'




export default function Home() {
 fetch('https://reqres.in/api/users?page=2', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then((response) => response.json())
    .then((json) => {
      console.log(json); 
    })

  const DATA = [];

  const getItem = (data, index) => {
    return {
      id: Math.random().toString(12).substring(0),
      title: `Item ${index+1}`
    }
  }

  const getItemCount = (data) => {
    return 50;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Friends</Text>
      <VirtualizedList
        data={DATA}
        initialNumToRender={4}
        renderItem={({ item }) =>
        <Item title={item.title} />}
        keyExtractor={item => item.key}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  title: {
    fontSize: 32,
    padding: 20
  }
});