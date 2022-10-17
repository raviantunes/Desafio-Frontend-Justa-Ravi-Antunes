import axios from "axios";
import { PokemonDetailsInterface } from "../interfaces/PokemonDetailsInterface";


export async function getPokemonDetailsService(name: string): Promise<PokemonDetailsInterface> {
  const endpoint = `https://pokeapi.co/api/v2/pokemon/${name}`;

  const response = await axios.get<PokemonDetailsInterface>(endpoint);

  return response.data;
}