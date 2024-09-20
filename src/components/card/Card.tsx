import { useQuery } from "@tanstack/react-query";
import "./Card.css";
import "../../styles/App.css";
import PokemonType from "../../types/PokemonType";
import TypeCircle from "../typecircle/TypeCircle";
import FavouriteButton from "../favouriteButton/FavouriteButton";
import { useNavigate } from "react-router-dom";

/**
 * Custom hook that fetches a Pokemon by its ID.
 * @param id - The ID of the Pokemon to fetch.
 * @returns The result of the query, containing the Pokemon data.
 */
const useFetchPokemonQuery = (id: string) => {
  return useQuery<PokemonType>(["pokemon", id], async () =>
    (await fetch(id)).json()
  );
};

/**
 * Fetches data for a specific Pokemon based on the provided ID.
 * @param id - The ID of the Pokemon to fetch.
 * @returns - A React component that renders a card for a Pokemon.
 */
const Card = ({ id }: { id: string }) => {
  const { data, isError, isLoading } = useFetchPokemonQuery(id);
  const navigate = useNavigate();

  return (
    <button
      className="card__container"
      onClick={() => navigate(`/pokemon/${data?.id}`)}
    >
      <div className="card__header">
        {isLoading ? "" : isError ? "" : <p>{"#" + data?.id}</p>}
        <p className="card__header-name">
          {isError ? "Error" : isLoading ? "" : data.name.toUpperCase()}
        </p>
        {data?.types.length == 2 ? (
          <TypeCircle
            primaryType={data?.types[0].type.name}
            secondaryType={data?.types[1].type.name}
          />
        ) : (
          <TypeCircle primaryType={data?.types[0].type.name} />
        )}
      </div>

      <div className="card__header-separator-line" />

      <div className="card__image-container">
        {isError ? (
          "Error"
        ) : isLoading ? (
          <div className="card__image">{"Loading..."}</div>
        ) : data ? (
          <img
            className="card__image"
            src={data.sprites.front_default}
            alt={`Image of ${data.name}`}
          />
        ) : (
          "Something went wrong"
        )}
      </div>
      <FavouriteButton favID={data?.id ?? -1} />
    </button>
  );
};

export default Card;
