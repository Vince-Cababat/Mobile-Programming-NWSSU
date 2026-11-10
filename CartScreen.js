import React from 'react';
import { View, Text, Pressable, FlatList, Alert } from 'react-native';
import { styles } from './globalStyles';
import { useCart } from './CartContext';

export default function CartScreen({ navigation }) {
  const { items, removeFromCart, clearCart, totalPrice } = useCart();

  const handleCheckout = () => {
    Alert.alert(
      'Order Placed',
      `Thank you! Your total is ₱${totalPrice.toLocaleString()}.`
    );
    clearCart();
    navigation.navigate('Home');
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.name}</Text>
      <View style={styles.row}>
        <Text style={styles.quantityText}>
          {item.quantity} × ₱{item.price.toLocaleString()}
        </Text>
        <Pressable onPress={() => removeFromCart(item.id)}>
          <Text style={styles.removeText}>Remove</Text>
        </Pressable>
      </View>
    </View>
  );

  if (items.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Your Cart</Text>
        <Text style={styles.emptyText}>Your cart is empty.</Text>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('ProductList')}
        >
          <Text style={styles.buttonText}>Browse Products</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />

      <View style={styles.totalRow}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalText}>₱{totalPrice.toLocaleString()}</Text>
      </View>

      <Pressable style={styles.button} onPress={handleCheckout}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </View>
  );
}
