import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FPercentage} from '../../../utils/responsive';
import {Card} from '../../../components/Atoms';

export default function index() {
  const navigation = useNavigation();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then(res => res.json())
      .then(json => {
        setData(json);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{fontSize: FPercentage(5)}}>&lt;</Text>
        </TouchableOpacity>
        <Text style={styles.title}>All Products</Text>
      </View>

      <FlatList
        data={data}
        numColumns={2}
        style={{paddingBottom: 50}}
        renderItem={({item}) => (
          <Card item={item} style={{width: '48%', margin: '1%'}} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: '5%',
    backgroundColor: 'white',
    paddingBottom: 20
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    paddingLeft: 15,
    fontWeight: 'bold',
    fontSize: FPercentage(4),
  },
});
