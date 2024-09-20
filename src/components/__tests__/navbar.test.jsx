import { describe, test, expect } from "vitest";
import Navbar from "../navbar/Navbar";
import { render, screen } from "@testing-library/react";

const mockUseNavigate = vi.fn();
const mockUseLocation = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockUseNavigate,
    useLocation: () => mockUseLocation,
  };
});

describe("Navbar", () => {
  test("matches snapshot", () => {
    const { container } = render(<Navbar />);
    expect(container).toMatchSnapshot();
  });

  test("should render", () => {
    render(<Navbar />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  test("should navigate to home", () => {
    render(<Navbar />);
    screen.getByText("Home").click();
    expect(mockUseNavigate).toHaveBeenCalledWith("/");
    expect(mockUseNavigate).toHaveBeenCalledTimes(1);
    screen.getByRole("img").click();
    expect(mockUseNavigate).toHaveBeenCalledWith("/");
    expect(mockUseNavigate).toHaveBeenCalledTimes(2);
  });

  test("should navigate to favourites", () => {
    mockUseNavigate.mockClear();
    render(<Navbar />);
    screen.getByText("Favourites").click();
    expect(mockUseNavigate).toHaveBeenCalledWith("/favourites");
    expect(mockUseNavigate).toHaveBeenCalledTimes(1);
  });
});
