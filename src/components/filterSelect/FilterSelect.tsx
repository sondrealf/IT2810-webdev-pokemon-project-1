import { ChangeEvent } from "react";
import "./FilterSelect.css";

/**
 * Capitalizes the first letter of a string.
 * @param str - The string to capitalize.
 * @returns The capitalized string.
 */
const Capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * A component that renders a select element for filtering options.
 * @param options - An array of strings representing the available options.
 * @param selected - A string representing the currently selected option.
 * @param handleChange - A function that handles the change event of the select element.
 * @param label - A string representing the label of the select element.
 * @returns {JSX.Element} - A React component that renders a select element for filtering options.
 */
const FilterSelect = ({
  options,
  selected,
  handleChange,
  label,
}: {
  options: string[];
  selected: string;
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  label: string;
}) => {
  return (
    <div className="app__filtering-container">
      <span className="app__filtering-text">{label}</span>
      <select
        value={selected}
        onChange={handleChange}
        className="filter-select"
        placeholder="Select a color"
      >
        {options.map((option, index) => {
          if (option === "none") {
            return (
              <option key={`${option}-${index}`} value={option}>
                Select a color
              </option>
            );
          }
          return (
            <option key={`${option}-${index}`} value={option}>
              {Capitalize(option)}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FilterSelect;
