import React from 'react';
import { View, Text, Pressable, Alert } from 'react-native';
import { styles } from './globalStyles';
import { useCart } from './CartContext';

export default function ProductDetails({ route, navigation }) {
  const { product } = route.params;
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    Alert.alert('Added to Cart', `${product.name} was added to your cart.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.category}>{product.category}</Text>
      <Text style={styles.title}>{product.name}</Text>

      <Text style={styles.detailLabel}>Price</Text>
      <Text style={styles.price}>₱{product.price.toLocaleString()}</Text>

      <Text style={styles.detailLabel}>Description</Text>
      <Text style={styles.description}>{product.description}</Text>

      <Pressable style={styles.button} onPress={handleAddToCart}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </Pressable>

      <Pressable
        style={styles.secondaryButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.secondaryButtonText}>← Back to Products</Text>
      </Pressable>
    </View>
  );
}
