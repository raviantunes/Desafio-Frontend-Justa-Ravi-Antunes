import axios from "axios";
import { PokemonDetailsInterface } from "../interfaces/PokemonDetailsInterface";
import { getPokemonDetailsService } from "./PokemonDetails.service";

export interface PokemonInterface {
    name: string;
    url: string;
}

export interface PokemonListInterface {
    count: number;
    next: null | string;
    previous: null | string;
    results: PokemonDetailsInterface[]
}

export async function listPokemons(): Promise<PokemonListInterface> {
  const endpoint = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";

  const response = await axios.get<PokemonListInterface>(endpoint);

  const promiseArr = response.data.results.map(async ({ name }) => getPokemonDetailsService(name));

  const resultsPromise = await Promise.all(promiseArr);

  return {
    ...response.data,
    results: resultsPromise
  };
}