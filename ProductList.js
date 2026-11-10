import React from 'react';
import { View, Text, Pressable, FlatList } from 'react-native';
import { styles } from './globalStyles';
import { products } from './products';
import { useCart } from './CartContext';

export default function ProductList({ navigation }) {
  const { totalItems } = useCart();

  const renderProduct = ({ item }) => (
    <Pressable
      style={styles.card}
      onPress={() => navigation.navigate('ProductDetails', { product: item })}
    >
      <Text style={styles.category}>{item.category}</Text>
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text style={styles.price}>₱{item.price.toLocaleString()}</Text>
      <Text style={styles.linkText}>View Details →</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>Product Catalog</Text>
        <Pressable onPress={() => navigation.navigate('Cart')}>
          <Text style={styles.linkText}>Cart ({totalItems})</Text>
        </Pressable>
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}
