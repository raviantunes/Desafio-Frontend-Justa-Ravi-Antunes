import { AppBar, Toolbar, IconButton, Typography, Container, Grid, Badge } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Favorite } from "@mui/icons-material";
import { listPokemons } from "../../../pokemons/services/listPokemons.service";
import PokedexCard from "../../components/pokedexCard";
import { Box } from "@mui/system";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import { useNavigate } from "react-router-dom";
import { PokemonDetailsInterface } from "../../../pokemons/interfaces/PokemonDetailsInterface";
import { Search, SearchIconWrapper, StyledInputBase } from "../../components/searchBar";
import SearchIcon from "@mui/icons-material/Search";

/* criando a renderização da página inicial (Pokedex) com o
filtro de busca e a utilização do contexto de pokemons favoritos*/
const Pokedex: React.FC = () => {
  const { favorites } = useContext(FavoritesContext);
  const [pokemons, setPokemons] = useState<PokemonDetailsInterface[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<PokemonDetailsInterface[]>([]);

  const navigate = useNavigate();
  

  useEffect(() => {
    listPokemons().then((response) => {
      setPokemons(response.results);
    });
  }, []);

  const favoritesCount = favorites.length;
  
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" >
            Pokédex
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ flexGrow: 1, marginLeft:"10px" }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onChange = {(e: React.ChangeEvent<HTMLInputElement>)=> {
                  setFilteredPokemons(pokemons.filter((pokemon) => 
                    pokemon.name.toLowerCase().includes(e.target.value.toLowerCase())
                    ||
                    pokemon.types.some((t) => t.type.name.includes(e.target.value.toLowerCase()))));
                }}
              />
            </Search>
          </Box>
          <Box sx={{ display: "flex" }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              onClick={() => navigate("/favorites")}
              color="inherit"
            >
              <Badge badgeContent={favoritesCount} color="secondary">
                <Favorite />
                <Typography>
                    My Favorites
                </Typography>
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Container sx={{bgcolor: "#FFF933", paddingBottom: "10vh"}}>
        <Box sx={{display: "flex", justifyContent: "center", paddingTop: "3vh"}}>
          <Box component={"img"} alt={"Gotta catch'em all!"} 
            src={"https://www.pngitem.com/pimgs/m/108-1081881_gotta-catch-em-all-transparent-pokemon-logo-pokemon.png"}
            sx={{width: "35vw", borderRadius: "16px"}}>
          </Box>
        </Box>
        <div style={{ marginTop: "1em" }}>            
          <Grid container spacing={2}>
            {filteredPokemons.length > 0 ?
              filteredPokemons?.map((pokemon) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={pokemon.name}>
                  <PokedexCard pokemon={pokemon} />
                </Grid>
              ))
              :
              pokemons?.map((pokemon) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={pokemon.name}>
                  <PokedexCard pokemon={pokemon} />
                </Grid>
              ))}
          </Grid>
            
          
        </div>
      </Container>
    </div>
  );
};

export default Pokedex;