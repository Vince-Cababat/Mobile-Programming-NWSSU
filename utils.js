import { CURRENCY_SYMBOL, SHIPPING_FEE, FREE_SHIPPING_MINIMUM } from './constants';

export function formatPrice(amount) {
  return `${CURRENCY_SYMBOL}${amount.toLocaleString()}`;
}

export function getShippingFee(subtotal) {
  if (subtotal === 0 || subtotal >= FREE_SHIPPING_MINIMUM) {
    return 0;
  }
  return SHIPPING_FEE;
}

export function getCategories(products) {
  const unique = products.map((product) => product.category);
  return [...new Set(unique)];
}

export function filterProducts(products, searchText, category, allLabel) {
  const query = searchText.trim().toLowerCase();
  return products.filter((product) => {
    const matchesCategory = category === allLabel || product.category === category;
    const matchesSearch = product.name.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });
}
