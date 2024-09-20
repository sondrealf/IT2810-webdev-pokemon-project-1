export default interface PokemonColors {
  id: number;
  name: string;

  pokemon_species: {
    name: string;
    url: string;
  }[];
}
