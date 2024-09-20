import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Card from "../card/Card.tsx";
import { it } from "vitest";

const mockUseNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockUseNavigate,
  };
});

describe("Card component", () => {
  const mockData = {
    id: 1,
    name: "bulbasaur",
    types: [{ type: { name: "grass" } }, { type: { name: "poison" } }],
    sprites: { front_default: "bulbasaur.png" },
  };

  const mockFetch = vi.fn(() => Promise.resolve({ json: () => mockData }));

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  const renderComponent = (props) =>
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <Card {...props} />
        </MemoryRouter>
      </QueryClientProvider>
    );

  beforeEach(() => {
    global.fetch = mockFetch;
  });

  afterEach(() => {
    vi.clearAllMocks();
    global.fetch = undefined;
  });

  it("matches snapshot", async () => {
    const { asFragment } = renderComponent({ id: "1" }); //TODO
    await waitFor(() => expect(mockFetch).toHaveBeenCalledTimes(1));
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders pokemon name and number", async () => {
    renderComponent({ id: "1" }); //TODO
    await waitFor(() => expect(mockFetch).toHaveBeenCalledTimes(1));
    expect(screen.getByText("#1")).toBeInTheDocument();
    expect(screen.getByText("BULBASAUR")).toBeInTheDocument();
  });

  it("renders pokemon image", async () => {
    renderComponent({ id: "1" });
    await waitFor(() => expect(mockFetch).toHaveBeenCalledTimes(1));
    expect(screen.getByRole("img")).toHaveAttribute("src", "bulbasaur.png");
  });

  it("navigates to pokemon details page when clicked", async () => {
    renderComponent({ id: "1" });
    screen.getByRole("img").click();
    expect(mockUseNavigate).toHaveBeenCalledWith("/pokemon/1");
    expect(mockUseNavigate).toHaveBeenCalledTimes(1);
  });
});
