import React, {useCallback, useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function index() {
  const [product, setProduct] = useState();
  const route = useRoute();
  const navigation = useNavigation();

  const {id, name} = route.params;

  const getProduct = useCallback(() => {
    fetch('https://fakestoreapi.com/products/1')
      .then(res => res.json())
      .then(json => setProduct(json));
  }, []);

  useEffect(() => {
    getProduct();
  }, [route]);

  console.log(product.image);

  return (
    <View style={styles.container}>
      <Text>Product Detail</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go back</Text>
      </TouchableOpacity>

      <View>
        <Image
          source={{
            uri: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
          }}
          style={styles.banner}
          resizeMode="center"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '5%',
  },
  banner: {
    width: '100%',
    height: 200,
  },
});
