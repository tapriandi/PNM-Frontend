// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  HomeScreen,
  ProductsScreen,
  ProductDetailScreen,
  LoginScreen,
} from './app/screen';
import {ButtomTab} from './app/components/Molecules';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ButtomTab"
        component={ButtomTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Product"
        component={ProductsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{headerShown: false}}
        initialParams={{id: 1}}
      />
    </Stack.Navigator>
  );
}

function App() {
  const isLogin = true;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLogin && (
          <Stack.Screen
            name={'Home'}
            component={HomeStack}
            options={{headerShown: false}}
          />
        )}

        {!isLogin && (
          <Stack.Screen
            name={'Login'}
            component={AuthStack}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
