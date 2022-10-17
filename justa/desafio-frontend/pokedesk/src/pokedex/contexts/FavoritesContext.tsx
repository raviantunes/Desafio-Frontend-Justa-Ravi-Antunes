import React, { ReactNode, useState } from "react";
import { PokemonDetailsInterface } from "../../pokemons/interfaces/PokemonDetailsInterface";

// declarando o tipo das props do contexto de favoritos 
interface FavoriteContextProps {
  favorites: PokemonDetailsInterface[];
  setFavorites: React.Dispatch<React.SetStateAction<PokemonDetailsInterface[]>>;
}

// declarando a prop do provider de favoritos
interface FavoriteProviderProps {
    children: ReactNode
}

// setando um valor inicial tipado para os favoritos 
const INITAL_FAVORITES_VALUE: PokemonDetailsInterface[] = [];

// criando context dos favoritos
export const FavoritesContext = React.createContext<FavoriteContextProps>({
  favorites: INITAL_FAVORITES_VALUE,
  setFavorites: () => console.warn("setFavorites is not ready"),
});

// criando o provider do contexto
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