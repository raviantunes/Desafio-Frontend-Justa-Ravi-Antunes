import React, { ReactNode, useState } from "react";
import { PokemonDetailsInterface } from "../../pokemons/interfaces/PokemonDetailsInterface";

interface FavoriteContextProps {
  favorites: PokemonDetailsInterface[];
  setFavorites: React.Dispatch<React.SetStateAction<PokemonDetailsInterface[]>>;
}

interface FavoriteProviderProps {
    children: ReactNode
}

const INITAL_FAVORITES_VALUE: PokemonDetailsInterface[] = [];

// criando context dos favoritos
export const FavoritesContext = React.createContext<FavoriteContextProps>({
  favorites: INITAL_FAVORITES_VALUE,
  setFavorites: () => console.warn("setFavorites is not ready"),
});

export const FavoritesProvider: React.FC<FavoriteProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<PokemonDetailsInterface[]>(INITAL_FAVORITES_VALUE);

  return (
    <FavoritesContext.Provider value={{
      favorites,
      setFavorites,
    }}>
      {children}
    </FavoritesContext.Provider>
  );
};