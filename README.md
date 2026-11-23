# Mobile-Programming-NWSSU

**My Mini Store** — a simple React Native shopping app for Mobile Programming at NWSSU.

## Features
- Home screen with navigation
- Product catalog (FlatList)
- Product details with "Add to Cart"
- Shopping cart with remove and checkout
- About screen
- Shared cart state using React Context
- Shared styles in one file
- Search bar and category filter
- Favorites list
- Checkout form with shipping fee
- Contact screen

## Files
| File | Purpose |
|------|---------|
| `globalStyles.js` | Shared colors and styles |
| `products.js` | Product data |
| `CartContext.js` | Cart state (add, remove, clear, totals) |
| `HomeScreen.js` | Welcome screen |
| `ProductList.js` | List of products |
| `ProductDetails.js` | Single product view + Add to Cart |
| `CartScreen.js` | Cart items, total and checkout |
| `AboutScreen.js` | App information |
| `App.js` | Navigation setup |
| `constants.js` | Store name, currency and shipping settings |
| `utils.js` | Price formatting, shipping fee and filter helpers |
| `SearchBar.js` | Search input component |
| `CategoryFilter.js` | Category chips component |
| `EmptyState.js` | Reusable empty message component |
| `ProductCard.js` | Product card with favorite heart |
| `FavoritesContext.js` | Favorites state |
| `FavoritesScreen.js` | List of favorite products |
| `CheckoutScreen.js` | Delivery form and order summary |
| `ContactScreen.js` | Store contact information |
| `README.md` | Project documentation |

## Requirements
- Node.js
- Expo
- `@react-navigation/native`
- `@react-navigation/native-stack`
- `react-native-screens`
- `react-native-safe-area-context`

## How to Run
Place these files inside an Expo project, install the packages above, then run:

```bash
npx expo start
```
