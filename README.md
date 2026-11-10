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
