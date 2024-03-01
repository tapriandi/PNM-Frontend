import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {FPercentage, heightPercentage} from '../../../utils/responsive';

// {"category": "men's clothing", "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", "id": 1, "image": "", "price": 109.95, "rating": {"count": 120, "rate": 3.9}, "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"}

export default function index({item}) {
  const navigation = useNavigation();

  const onPresss = () => {
    navigation.navigate('ProductDetail', {
      id: 'asdfasdeee3q2342kjh2ib3h',
      name: 'product 1',
    });
  };

  return (
    <Pressable style={styles.card} onPress={onPresss}>
      <Image
        source={{
          uri: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        }}
        style={styles.image}
      />
      <View style={styles.box}>
        <Text>Product Title</Text>
        <Text style={{fontWeight: 'bold', fontSize: FPercentage('4.3')}}>$200</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '30%',
    height: heightPercentage(20),
    borderRadius: 10,
    padding: 2,
    backgroundColor: '#f0f0f0',
  },
  image: {
    width: '100%',
    height: '70%',
  },
  box: {
    padding: 5,
  },
});
