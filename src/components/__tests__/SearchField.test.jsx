import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { fireEvent } from "@testing-library/dom";
import SearchField from "../searchfield/SearchField";

const mockUseNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockUseNavigate,
  };
});

describe("SearchField", () => {
  test("matches snapshot", () => {
    const { container } = render(<SearchField />);
    expect(container).toMatchSnapshot();
  });

  test("should render searchfield", () => {
    render(<SearchField />);
    expect(screen.getByRole("searchbox")).toBeInTheDocument();
    expect(screen.getByRole("searchbox")).toHaveValue("");
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("should change textfield value", () => {
    render(<SearchField />);
    const search = screen.getByRole("searchbox");
    fireEvent.change(search, { target: { value: "pikachu" } });
    expect(search).toHaveValue("pikachu");
  });

  test("Pokemon page for the searched pokemon is shown on search submit", () => {
    render(<SearchField />);
    const search = screen.getByRole("searchbox");
    fireEvent.change(search, { target: { value: "vulpix" } });
    fireEvent.submit(screen.getByRole("button"));
    expect(mockUseNavigate).toHaveBeenCalledWith("/pokemon/vulpix");
  });

  test("Case sensitive search", () => {
    mockUseNavigate.mockClear();
    render(<SearchField />);
    const search = screen.getByRole("searchbox");
    fireEvent.change(search, { target: { value: "Vulpix" } });
    fireEvent.submit(screen.getByRole("button"));
    expect(mockUseNavigate).toHaveBeenCalledWith("/pokemon/vulpix");
  });
});
