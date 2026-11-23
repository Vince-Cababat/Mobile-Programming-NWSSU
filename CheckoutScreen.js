import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert, ScrollView, StyleSheet } from 'react-native';
import { styles, colors } from './globalStyles';
import { useCart } from './CartContext';
import { formatPrice, getShippingFee } from './utils';

export default function CheckoutScreen({ navigation }) {
  const { items, totalPrice, clearCart } = useCart();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const shipping = getShippingFee(totalPrice);
  const grandTotal = totalPrice + shipping;

  const handlePlaceOrder = () => {
    if (items.length === 0) {
      Alert.alert('Cart Empty', 'Add some products before checking out.');
      return;
    }
    if (!name.trim() || !address.trim()) {
      Alert.alert('Missing Details', 'Please enter your name and address.');
      return;
    }
    Alert.alert(
      'Order Placed',
      `Thank you, ${name.trim()}! Your total is ${formatPrice(grandTotal)}.`
    );
    clearCart();
    navigation.navigate('Home');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Checkout</Text>

      <Text style={styles.detailLabel}>Full Name</Text>
      <TextInput
        style={localStyles.input}
        value={name}
        onChangeText={setName}
        placeholder="Juan Dela Cruz"
        placeholderTextColor={colors.muted}
      />

      <Text style={styles.detailLabel}>Delivery Address</Text>
      <TextInput
        style={[localStyles.input, localStyles.multiline]}
        value={address}
        onChangeText={setAddress}
        placeholder="Street, Barangay, City"
        placeholderTextColor={colors.muted}
        multiline
      />

      <Text style={styles.detailLabel}>Order Summary</Text>
      <View style={localStyles.summaryRow}>
        <Text style={styles.description}>Subtotal</Text>
        <Text style={styles.description}>{formatPrice(totalPrice)}</Text>
      </View>
      <View style={localStyles.summaryRow}>
        <Text style={styles.description}>Shipping</Text>
        <Text style={styles.description}>
          {shipping === 0 ? 'Free' : formatPrice(shipping)}
        </Text>
      </View>
      <View style={styles.totalRow}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalText}>{formatPrice(grandTotal)}</Text>
      </View>

      <Pressable style={styles.button} onPress={handlePlaceOrder}>
        <Text style={styles.buttonText}>Place Order</Text>
      </Pressable>
    </ScrollView>
  );
}

const localStyles = StyleSheet.create({
  input: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    color: colors.text,
  },
  multiline: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
});
