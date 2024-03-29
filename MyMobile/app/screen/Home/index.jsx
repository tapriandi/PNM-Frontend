import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Card, TitleSection} from '../../components/Atoms';

export default function index() {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then(res => res.json())
      .then(json => {
        const _data = json.slice(0, 3);
        setData(_data);
      });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <>
        <View>
          <Text style={styles.title}>Home page</Text>
        </View>

        <View style={styles.banner}></View>

        <Button
          title="To Product Screen"
          color="#f194ff"
          onPress={() => navigation.navigate('Product')}
        />

        <View>
          <TitleSection title="All Products" />
          <View style={styles.wrap}>
            {data.map((item, idx) => (
              <Card key={idx} item={item} style={{width: '30%'}} />
            ))}
          </View>
        </View>

        <View>
          <TitleSection title="All Products" />
          <View style={styles.wrap}>
            {data.map((item, idx) => (
              <Card key={idx} item={item} style={{width: '30%'}} />
            ))}
          </View>
        </View>
      </>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: '5%',
    paddingTop: 20,
    paddingBottom: 100,
  },
  banner: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  wrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
