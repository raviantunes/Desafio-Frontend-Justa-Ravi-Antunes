import { AppBar, Toolbar, IconButton, Typography, Container, Grid, Box } from "@mui/material";
import { WestOutlined as BackArrowIcon } from "@mui/icons-material";
import React, { useContext } from "react";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import PokedexCard from "../../components/pokedexCard";
import { useNavigate } from "react-router-dom";

/* criando a página de favoritos, utilizando o 
contexto de favoritos para a renderização dos cards*/
const Favorites: React.FC = () => {
  const { favorites } = useContext(FavoritesContext);

  const navigate = useNavigate();

  return (
    <>
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" size="large">
              <BackArrowIcon onClick={() => navigate("/")}/>
            </IconButton>
            <Typography variant="h6" >
              Your Favorite Pokémons!
            </Typography>
          </Toolbar>
        </AppBar>

        {favorites.length === 0 ? 
          <div>
            <Box sx={{display: "flex", justifyContent: "center", paddingTop: "8vh", bgcolor: "#FFF933", paddingBottom: "10vh", height: "100vh"}}>
              <Typography variant="h5" sx={{color: "#0069E0"}}>
                You still have no favorite Pokémons! :(
              </Typography>

            </Box>
          </div>

          :

          <Container sx={{bgcolor: "#FFF933", paddingBottom: "10vh", height: "100vh"}}>
            <div style={{ marginTop: "1em" }}>
              <Grid container spacing={2}>
                {favorites?.map((pokemon) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={pokemon.name}>
                    <PokedexCard pokemon={pokemon} />
                  </Grid>
                ))}
              </Grid>
            </div>
          </Container>
        }
      </div>
    </>
  );
};

export default Favorites;