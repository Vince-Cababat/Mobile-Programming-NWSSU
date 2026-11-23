import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import { styles, colors } from './globalStyles';
import { formatPrice } from './utils';

export default function ProductCard({ product, isFavorite, onPress, onToggleFavorite }) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.row}>
        <Text style={styles.category}>{product.category}</Text>
        <Pressable onPress={onToggleFavorite} hitSlop={10}>
          <Text style={[localStyles.heart, isFavorite && localStyles.heartActive]}>
            {isFavorite ? '♥' : '♡'}
          </Text>
        </Pressable>
      </View>
      <Text style={styles.cardTitle}>{product.name}</Text>
      <Text style={styles.price}>{formatPrice(product.price)}</Text>
      <Text style={styles.linkText}>View Details →</Text>
    </Pressable>
  );
}

const localStyles = StyleSheet.create({
  heart: {
    fontSize: 22,
    color: colors.muted,
  },
  heartActive: {
    color: colors.danger,
  },
});
