import Card from "../card/Card";
import "./PokemonGrid.css";

interface PokemonList {
  pokemonData: {
    name: string;
    url: string;
  }[];
}

export const PokemonGrid = ({ pokemonList }: { pokemonList: PokemonList }) => {
  return (
    <div className="pokemonGrid__grid">
      {/* Mapping over all pokémons, and rendering a Card for each one */}
      {pokemonList.pokemonData?.map((pokemon, index) => {
        return <Card key={`${pokemon.name}-${index}`} id={pokemon.url} />;
      })}
    </div>
  );
};
