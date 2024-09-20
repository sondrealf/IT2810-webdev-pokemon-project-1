import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import FilterSelect from "../filterSelect/FilterSelect";
import { fireEvent } from "@testing-library/dom";

const mockTest = vi.fn();

describe("FilterSelect", () => {
  test("should match snapshot", () => {
    const { container } = render(
      <FilterSelect
        options={["test", "test2"]}
        handleChange={(e) => {
          console.log(e.target.value);
        }}
        selected="test"
      />
    );

    expect(container).toMatchSnapshot();
  });

  test("should render correctly", () => {
    render(
      <FilterSelect
        options={["none", "test", "test2"]}
        handleChange={(e) => {
          console.log(e.target.value);
        }}
        selected="test"
      />
    );

    expect(screen.getByText("Test")).toBeInTheDocument();
    expect(screen.getByText("Select a color")).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toHaveValue("test");
    expect(screen.getAllByRole("option")).toHaveLength(3);
  });

  test("should change option", () => {
    render(
      <FilterSelect
        options={["test", "test2"]}
        handleChange={(e) => mockTest(e.target.value)}
        selected="test"
      />
    );

    const select = screen.getByRole("combobox");

    fireEvent.change(select, { target: { value: "test2" } });
    expect(mockTest).toHaveBeenCalledWith("test2");
    expect(mockTest).toHaveBeenCalled();
  });
});
