export interface Pokemons {
  count: number;
  next: string;
  previous: string;
  results: {
    name: string;
    url: string;
  }[];
}

export interface PokemonsResults {
  results: {
    name: string;
    url: string;
  };
}
