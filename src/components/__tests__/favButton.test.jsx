import { describe, expect } from "vitest";
import FavouriteButton from "../favouriteButton/FavouriteButton";
import { render, screen, fireEvent } from "@testing-library/react";

describe("FavouriteButton", () => {
  it("matches snapshot", () => {
    const { container } = render(<FavouriteButton favID={1} />);
    expect(container).toMatchSnapshot();
  });

  it("should render without errors", () => {
    render(<FavouriteButton favID={1} />);
    expect(screen.getByRole("svg")).toBeInTheDocument();
  });

  it("should add to favourites when clicked", () => {
    localStorage.setItem("favourites", JSON.stringify([]));
    render(<FavouriteButton favID={1} />);
    fireEvent.click(screen.getByRole("svg"));
    expect(JSON.parse(localStorage.getItem("favourites") ?? "[]")).toEqual([1]);
  });

  it("should remove from favourites when clicked", () => {
    localStorage.setItem("favourites", JSON.stringify([1]));
    render(<FavouriteButton favID={1} />);
    fireEvent.click(screen.getByRole("svg"));
    expect(JSON.parse(localStorage.getItem("favourites") ?? "[]")).toEqual([]);
  });

  it("should add to favourites when clicked", () => {
    localStorage.clear();
    render(<FavouriteButton favID={1} />);
    fireEvent.click(screen.getByRole("svg"));
    expect(JSON.parse(localStorage.getItem("favourites") ?? "[]")).toEqual([1]);
  });
});
