import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CartProvider } from './CartContext';
import HomeScreen from './HomeScreen';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import CartScreen from './CartScreen';
import AboutScreen from './AboutScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'My Mini Store' }}
          />
          <Stack.Screen
            name="ProductList"
            component={ProductList}
            options={{ title: 'Products' }}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetails}
            options={{ title: 'Product Details' }}
          />
          <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{ title: 'My Cart' }}
          />
          <Stack.Screen
            name="About"
            component={AboutScreen}
            options={{ title: 'About' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
