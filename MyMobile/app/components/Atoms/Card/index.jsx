import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {FPercentage, heightPercentage} from '../../../utils/responsive';

// {"category": "men's clothing", "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", "id": 1, "image": "", "price": 109.95, "rating": {"count": 120, "rate": 3.9}, "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"}

export default function index({item, style}) {
  const navigation = useNavigation();

  const onPresss = () => {
    navigation.navigate('ProductDetail', {
      id: item.id,
    });
  };

  return (
    <Pressable style={[styles.card, style]} onPress={onPresss}>
      <View style={styles.imgBox}>
        <Image
          resizeMode="contain"
          source={{uri: item.image}}
          style={styles.image}
        />
      </View>
      <View style={styles.box}>
        <Text
          ellipsizeMode="tail"
          numberOfLines={1}
          style={{fontSize: FPercentage('3')}}>
          {item.title}
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: FPercentage('3.5')}}>
          ${item.price}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    height: heightPercentage(20),
    borderRadius: 10,
    padding: 2,
    backgroundColor: '#f0f0f0',
  },
  imgBox: {
    padding: 5,
    height: heightPercentage(14),
  },
  image: {
    width: '100%',
    height: '100%',
  },
  box: {
    padding: 5,
  },
});
