import axios from "axios";
import { PokemonDetailsInterface } from "../interfaces/PokemonDetailsInterface";
import { getPokemonDetailsService } from "./PokemonDetails.service";

// tipando as informações da lista de pokemons recebidas da API
export interface PokemonListInterface {
    count: number;
    next: null | string;
    previous: null | string;
    results: PokemonDetailsInterface[]
}

//criando o service que faz a requisição geral dos pokemons à API
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