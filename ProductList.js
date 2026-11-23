import React, { useState } from 'react';
import { View, Text, Pressable, FlatList } from 'react-native';
import { styles } from './globalStyles';
import { products } from './products';
import { useCart } from './CartContext';
import { useFavorites } from './FavoritesContext';
import { ALL_CATEGORIES } from './constants';
import { getCategories, filterProducts } from './utils';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import ProductCard from './ProductCard';
import EmptyState from './EmptyState';

export default function ProductList({ navigation }) {
  const { totalItems } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();
  const [searchText, setSearchText] = useState('');
  const [category, setCategory] = useState(ALL_CATEGORIES);

  const categories = [ALL_CATEGORIES, ...getCategories(products)];
  const visibleProducts = filterProducts(
    products,
    searchText,
    category,
    ALL_CATEGORIES
  );

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>Product Catalog</Text>
        <Pressable onPress={() => navigation.navigate('Cart')}>
          <Text style={styles.linkText}>Cart ({totalItems})</Text>
        </Pressable>
      </View>

      <SearchBar value={searchText} onChangeText={setSearchText} />
      <CategoryFilter
        categories={categories}
        selected={category}
        onSelect={setCategory}
      />

      <FlatList
        data={visibleProducts}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<EmptyState message="No products found." />}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            isFavorite={isFavorite(item.id)}
            onPress={() => navigation.navigate('ProductDetails', { product: item })}
            onToggleFavorite={() => toggleFavorite(item.id)}
          />
        )}
      />
    </View>
  );
}
