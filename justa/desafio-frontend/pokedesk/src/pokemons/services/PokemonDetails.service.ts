import axios from "axios";
import { PokemonDetailsInterface } from "../interfaces/PokemonDetail";


export async function getPokemonDetails(name: string): Promise<PokemonDetailsInterface> {
  const endpoint = `${process.env.REACT_APP_POKEAPI}/pokemon/${name}`;

  const response = await axios.get<PokemonDetailsInterface>(endpoint);

  return response.data;
}