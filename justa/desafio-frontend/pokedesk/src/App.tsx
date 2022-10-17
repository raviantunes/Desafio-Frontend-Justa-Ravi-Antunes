import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokedex from "./pokedex/pages/pokedexPage";
import Favorites from "./pokedex/pages/favorites";
import { FavoritesProvider } from "./pokedex/contexts/FavoritesContext";

// inicializando o app com todas as rotas e contexto de favoritos
function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pokedex />}></Route>
          <Route path="favorites" element={<Favorites />}></Route>
        </Routes>
      </BrowserRouter>
    </FavoritesProvider>
  );
}

export default App;
