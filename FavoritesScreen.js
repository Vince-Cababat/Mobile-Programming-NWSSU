import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from './globalStyles';
import { products } from './products';
import { useFavorites } from './FavoritesContext';
import ProductCard from './ProductCard';
import EmptyState from './EmptyState';

export default function FavoritesScreen({ navigation }) {
  const { favoriteIds, isFavorite, toggleFavorite } = useFavorites();
  const favoriteProducts = products.filter((p) => favoriteIds.includes(p.id));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Favorites</Text>

      {favoriteProducts.length === 0 ? (
        <EmptyState
          message="You have no favorite products yet."
          buttonLabel="Browse Products"
          onPress={() => navigation.navigate('ProductList')}
        />
      ) : (
        <FlatList
          data={favoriteProducts}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <ProductCard
              product={item}
              isFavorite={isFavorite(item.id)}
              onPress={() => navigation.navigate('ProductDetails', { product: item })}
              onToggleFavorite={() => toggleFavorite(item.id)}
            />
          )}
        />
      )}
    </View>
  );
}
