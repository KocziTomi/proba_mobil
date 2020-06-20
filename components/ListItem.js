import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import 'react-native-gesture-handler';



export default function ListItem(props) {
    return(
        <View style={styles.item}>
                <Image 
                    source={{uri: props.avatarUri }} 
                    style={styles.image}
                />
            <View style={styles.data_container}>
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.email} numberOfLines={2}>{props.email}</Text>
                <Text style={styles.id}>ID: {props.id}</Text>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    item: {
      borderRadius: 20,
      borderColor: '#707070',
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
    data_container: {
        flex: 2,
        paddingLeft: 20,
        justifyContent: 'space-evenly' 
    },
    image: {
        flex:1, 
        height: undefined, 
        width: undefined,
    },
});