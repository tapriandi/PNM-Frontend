import React, {useCallback, useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function index() {
  const [product, setProduct] = useState();
  const route = useRoute();
  const navigation = useNavigation();

  const {id} = route.params;

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(json => setProduct(json));
  }, [id]);

  console.log(product)

  return (
    <View style={styles.container}>
      <Text>Product Detail</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go back</Text>
      </TouchableOpacity>

      <View>
        <Image source={{uri: product?.image}} style={styles.banner} />
        {/* <Image
          source={{uri: product.image}}
          style={styles.banner}
          resizeMode="center"
        /> */}
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
    height: '70%',
  },
});
