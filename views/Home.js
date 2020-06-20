import React, {useState, useEffect} from 'react';
import { View, VirtualizedList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import Item from '../components/ListItem'

export default function Home() {

  const [items, setItems] = useState([]);
  const [isItemsChanged, setIsItemsChanged] = useState(false);

  const URL = 'https://reqres.in/api/users?page=2';

  async function getItems () {

      let response = await fetch(URL);
      let json = await response.json();

      setItems(json.data);
      return;
  }

  useEffect(() => {

    getItems();

  }, [isItemsChanged]);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Friends</Text>
      <VirtualizedList
        data={items}
        getItem={(data, index) => data[index]}
        getItemCount={data => data.length}
        renderItem={({ item }) =>
        <Item avatarUri={item.avatar} name={item.first_name + ' ' + item.last_name}  email={item.email} id={item.id}/>}
        keyExtractor={item => item.id.toString()}
      />
    </View>
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