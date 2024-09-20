import "./FavouriteButton.css";
import { useState, useEffect } from "react";

interface FavouriteButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  favID: number;
}

/**
 * Checks if the current item is in the favourites list stored in localStorage.
 * @param id - The id of the item to check.
 * @returns - A React component that renders a star icon.
 */
const FavouriteButton = ({ favID, ...rest }: FavouriteButtonProps) => {
  // Check if the pokemon is in the favourites
  const fav = (
    JSON.parse(localStorage.getItem("favourites") ?? "[]") as number[]
  ).includes(favID);

  const [favourites, setFavourites] = useState(fav);

  useEffect(() => {
    setFavourites(fav);
  }, [fav]);
  return (
    <div className="FavouriteButton__container" {...rest}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        role="svg"
        viewBox="0 0 22 23"
        onClick={(e) => {
          e.stopPropagation();

          // If the pokemon is already in the favourites, remove it and set the state to false
          if (
            (
              JSON.parse(localStorage.getItem("favourites") ?? "[]") as number[]
            ).includes(favID)
          ) {
            localStorage.setItem(
              "favourites",
              JSON.stringify(
                //  Get the favourites from the local storage, filter out the pokemon that was clicked on, and set the new favourites
                (
                  JSON.parse(
                    localStorage.getItem("favourites") ?? "[]"
                  ) as number[]
                ).filter((ids) => ids != favID)
              )
            );
            setFavourites(false);
          } else {
            // If the pokemon is not in the favourites, add it and set the state to true
            localStorage.setItem(
              "favourites",
              JSON.stringify(
                // Get the favourites from the local storage, add the pokemon that was clicked on, and set the new favourites
                (
                  JSON.parse(
                    localStorage.getItem("favourites") ?? "[]"
                  ) as number[]
                ).concat([favID])
              )
            );
            setFavourites(true);
          }
        }}
      >
        <path
          className={` ${
            favourites
              ? "FavouriteButton__favourited"
              : "FavouriteButton__starpath"
          }`}
          d="M8.77229 2.22466C9.47249 -0.174957 12.8719 -0.174952 13.5721 2.22467L14.2763 4.63798C14.5875 5.7045 15.5652 6.43769 16.6762 6.43769H19.481C21.8374 6.43769 22.8853 9.39923 21.0534 10.8813L18.3381 13.0781C17.5545 13.712 17.2282 14.7544 17.5106 15.7219L18.4363 18.8947C19.1225 21.2461 16.3683 23.0792 14.464 21.5385L12.7446 20.1475C11.8276 19.4056 10.5168 19.4056 9.59981 20.1475L7.8804 21.5385C5.97608 23.0792 3.22194 21.2461 3.90807 18.8947L4.83386 15.7219C5.11618 14.7544 4.7899 13.712 4.00635 13.0781L1.291 10.8813C-0.540912 9.39924 0.507053 6.43769 2.8634 6.43769H5.66818C6.77918 6.43769 7.7569 5.7045 8.0681 4.63798L8.77229 2.22466Z"
        />
      </svg>
    </div>
  );
};
export default FavouriteButton;
