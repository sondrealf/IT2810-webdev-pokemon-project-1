import { describe, test, expect } from "vitest";
import Pagination from "../pagination/Pagination";
import { render, screen } from "@testing-library/react";

const mockOnChange = vi.fn();

describe("Pagination", () => {
  test("should render", () => {
    render(
      <Pagination
        count={10}
        currentIndex={0}
        onChange={(index) => {
          mockOnChange(index + 1);
        }}
      />
    );
    expect(screen.getByAltText("Previous")).toBeInTheDocument();
    expect(screen.getByAltText("Next")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { container } = render(
      <Pagination
        count={10}
        currentIndex={0}
        onChange={(index) => {
          mockOnChange(index + 1);
        }}
      />
    );
    expect(container).toMatchSnapshot();
  });

  test("should navigate to next page", () => {
    render(
      <Pagination
        count={10}
        currentIndex={0}
        onChange={(index) => mockOnChange(index + 1)}
      />
    );

    const [previousButton, nextButton] = screen.getAllByRole("button");

    expect(previousButton).toBeDisabled();

    previousButton.click();
    expect(mockOnChange).toHaveBeenCalledTimes(0);

    nextButton.click();
    expect(mockOnChange).toHaveBeenCalledOnce();
    expect(mockOnChange).toHaveBeenCalledWith(2);
  });

  test("should navigate to previous page", () => {
    render(
      <Pagination
        count={10}
        currentIndex={1}
        onChange={(index) => mockOnChange(index + 1)}
      />
    );

    mockOnChange.mockClear();

    const [previousButton, nextButton] = screen.getAllByRole("button");

    previousButton.click();
    expect(mockOnChange).toHaveBeenCalledOnce();
    expect(mockOnChange).toHaveBeenCalledWith(1);
  });
});
