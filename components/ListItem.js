import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, Alert, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';



export default function ListItem(props) {
    
    return(
        <View style={styles.item}>
            <View style={styles.image_container}>

            </View>
            <View style={styles.data_container}>
                <Text style={styles.name}>{props.name}Név</Text>
                <Text style={styles.email} numberOfLines={2}>{props.email}Email</Text>
                <Text style={styles.id}>{props.id}ID:</Text>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    item: {
      borderRadius: 20,
      borderColor: '#000',
      borderWidth: 2,
      backgroundColor: '#fff',
      height: 150,
      marginVertical: 8,
      marginHorizontal: 16,
      padding: 20,
      flexDirection: 'row',
      alignContent: 'flex-start'
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold'
    },
    id: {
      fontWeight: 'bold'
    },
    image_container: {
        flex: 1,
        backgroundColor: '#000',
        
    },
    data_container: {
        flex: 2,
        paddingLeft: 20,
        justifyContent: 'space-evenly'
        
    },
  });