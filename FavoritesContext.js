import React, { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState([]);

  const toggleFavorite = (id) => {
    setFavoriteIds((current) =>
      current.includes(id)
        ? current.filter((favId) => favId !== id)
        : [...current, id]
    );
  };

  const isFavorite = (id) => favoriteIds.includes(id);

  return (
    <FavoritesContext.Provider
      value={{
        favoriteIds,
        toggleFavorite,
        isFavorite,
        totalFavorites: favoriteIds.length,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
