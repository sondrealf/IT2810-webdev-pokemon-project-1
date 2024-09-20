export default interface PokemonSpecies {
  id: number;
  name: string;

  color: {
    name: string;
    url: string;
  };

  varieties: {
    is_default: true;
    pokemon: {
      name: string;
      url: string;
    };
  }[];
}
