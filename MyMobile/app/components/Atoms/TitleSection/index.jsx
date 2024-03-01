import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';

export default function index({title}) {
  const navigation = useNavigation();

  return (
    <View style={styles.titleSection}>
      <Text style={[styles.title, {fontWeight: 'bold'}]}>{title}</Text>
      <Pressable
        style={styles.title}
        onPress={() => navigation.navigate('Product')}>
        <Text>see</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  titleSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    paddingVertical: 10,
  },
});
