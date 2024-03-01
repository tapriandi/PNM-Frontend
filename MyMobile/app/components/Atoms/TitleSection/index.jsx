import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function index({title}) {
  return (
    <View style={styles.titleSection}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>see</Text>
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
    fontWeight: 'bold',
    paddingVertical: 10,
  },
});
