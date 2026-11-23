import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './globalStyles';
import { useCart } from './CartContext';
import { useFavorites } from './FavoritesContext';

export default function HomeScreen({ navigation }) {
  const { totalItems } = useCart();
  const { totalFavorites } = useFavorites();

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
        onPress={() => navigation.navigate('Favorites')}
      >
        <Text style={styles.secondaryButtonText}>
          My Favorites ({totalFavorites})
        </Text>
      </Pressable>

      <Pressable
        style={styles.secondaryButton}
        onPress={() => navigation.navigate('Contact')}
      >
        <Text style={styles.secondaryButtonText}>Contact Us</Text>
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
