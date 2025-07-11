import { createContext, useContext, useEffect, useState } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const data = localStorage.getItem('favorites');
    return data ? JSON.parse(data) : [];
  });

  const toggleFavorite = (character) => {
    const exists = favorites.some((fav) => fav.id === character.id);
    const updated = exists
      ? favorites.filter((fav) => fav.id !== character.id)
      : [...favorites, character];

    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);