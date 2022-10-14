import axios from "axios";
import { PokemonDetailsInterface } from "../interfaces/PokemonDetailsInterface";
import { PokemonDetailsService } from "./PokemonDetails";

export interface PokemonInterface {
    name: string;
    url: string;
}

interface PokemonListInterface {
    couunt: number;
    next: null | string;
    previous: null | string;
    results: PokemonDetailsInterface[]
}

export async function listPokemons(): Promise<PokemonListInterface> {
    const endpoint = `${process.env.REACT_APP_POKEAPI_URL}/pokemon?limit=151&offset=0`

    const response = await axios.get<PokemonListInterface>(endpoint)

    const promiseArr = response.data.results.map(({ name }) => PokemonDetailsService(name))

    const resultsPromise = await Promise.all(promiseArr)

    return {
        ...response,
        results: resultsPromise
    };
}