import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './globalStyles';
import { useCart } from './CartContext';

export default function HomeScreen({ navigation }) {
  const { totalItems } = useCart();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My Mini Store</Text>
      <Text style={styles.subtitle}>
        Browse our products, add items to your cart, and check out in a few
        taps.
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('ProductList')}
      >
        <Text style={styles.buttonText}>Browse Products</Text>
      </Pressable>

      <Pressable
        style={styles.secondaryButton}
        onPress={() => navigation.navigate('Cart')}
      >
        <Text style={styles.secondaryButtonText}>
          View Cart ({totalItems})
        </Text>
      </Pressable>

      <Pressable
        style={styles.secondaryButton}
        onPress={() => navigation.navigate('About')}
      >
        <Text style={styles.secondaryButtonText}>About This App</Text>
      </Pressable>
    </View>
  );
}
