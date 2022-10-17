import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { PokemonDetailsInterface } from "../../../pokemons/interfaces/PokemonDetailsInterface";
import { useEffect, useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30vw",
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "16px",
  boxShadow: 24,
  p: 4,
  height: "60vh",
  img: {
    width: "100%",
    height: "100%"
  }
};

export type ModalProps = {
  pokemon: PokemonDetailsInterface;
}

export const PokemonDetailsModal: React.FC<ModalProps> = ({ pokemon }) => {
  const [open, setOpen] = useState(false);
  const [pokeDescription, setPokeDescription] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // useEffect(() => {
  //   fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`)
  //     .then((response) => console.log(response))
  //   ,[];
  // });

  return (
    <div>
      <Button onClick={handleOpen}>
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Box sx={{  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between",}}>
              <Box sx={{marginBottom: "5vh"}}>
                <Typography variant="h4">
                  {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </Typography>
              </Box>

              <Box
                component="img"
                sx={{
                  maxHeight: { xs: 95, md: 130 },
                  maxWidth: { xs: 130, md: 170 },
                }}
                alt={pokemon.name}
                src={pokemon.sprites.versions?.["generation-v"]["black-white"].animated?.front_default}
              />

              <Box>
                <Typography>
                  {}
                </Typography>
              </Box>

              <Button onClick={handleClose}>
                close
              </Button>

            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
