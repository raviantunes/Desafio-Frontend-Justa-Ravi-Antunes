import { Favorite } from "@mui/icons-material";
import { Card, CardMedia, CardHeader, CardActions, IconButton, Chip } from "@mui/material";
import React, { useContext } from "react";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import { PokemonDetailsInterface } from "../../../pokemons/interfaces/PokemonDetailsInterface"; 
import { PokemonDetailsModal } from "../pokemonDetailsModal";

// tipando a prop recebida por cada card renderizado na página inicial (Pokedex)
interface PokedexCardProps {
  pokemon: PokemonDetailsInterface;
}

// criando o card de cada pokemon utilizando o contexto de favoritos
const PokedexCard: React.FC<PokedexCardProps> = ({ pokemon }) => {
  const { setFavorites, favorites } = useContext(FavoritesContext);

  const addPokemonToFavorite = () => {
    setFavorites([...favorites, pokemon]);
  };

  const removePokemonFromFavorites = () => {
    setFavorites(favorites.filter((poke) => poke.name !== pokemon.name));
  };

  const isFavorite = favorites.some((poke) => poke.name === pokemon.name);

  return (
    <Card sx={ {display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "5px"} }>
      <PokemonDetailsModal pokemon={pokemon}/>
      <CardMedia
        component="img"
        alt={pokemon.name}
        height="100"
        image={pokemon.sprites.front_default}
        style={{width: "52%"}}
        title={pokemon.name}
      />
      <CardHeader
        subheader={pokemon.types.map((type) => <Chip variant="outlined" size="small" label={type.type.name} key={type.type.name} style={{marginLeft: ".4vw"}}/>)}
      />
      <CardActions disableSpacing>
        <IconButton onClick={() => isFavorite ? removePokemonFromFavorites() : addPokemonToFavorite()} aria-label="add to favorites">
          <Favorite color={isFavorite ? "error" : "disabled"} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default PokedexCard;