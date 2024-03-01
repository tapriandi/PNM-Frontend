import React, {useCallback, useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  AsyncStorage,
} from 'react-native';
import {FPercentage} from '../../utils/responsive';

export default function index() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    console.log(username, password)
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        onChangeText={e => setUsername(e)}
        placeholder="username"
      />
      <TextInput
        style={styles.input}
        onChangeText={e => setPassword(e)}
        placeholder="Password"
        keyboardType="password"
      />
      <Pressable onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '5%',
    paddingBottom: 50,
  },
  title: {
    fontSize: FPercentage(6),
    paddingBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '80%',
  },
  button: {
    height: 44,
    width: '80%',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D53AFE',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
