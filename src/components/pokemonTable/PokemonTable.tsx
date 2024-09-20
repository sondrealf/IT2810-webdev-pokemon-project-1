import PokemonType from "../../types/PokemonType";
import "./PokemonTable.css";

const PokemonTable = (pokemonData: PokemonType) => {
  return (
    <div className="pokemon-table">
      <h3 className="mini-header">Base statistics</h3>
      <table className="pokemon-table__stats">
        <tbody>
          {/* Mapping over a pokémons stats and displays it in a table */}
          {pokemonData.stats.map((stat, index) => {
            return (
              <tr
                className="pokemon-table__stats-row"
                key={`${index}-${stat.stat.name}`}
              >
                <th className="pokemon-table__stats-header">
                  {stat.stat.name}
                </th>
                <td className="pokemon-table__stats-number">
                  {stat.base_stat}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PokemonTable;
