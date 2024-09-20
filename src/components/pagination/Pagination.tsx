import "./Pagination.css";
import ButtonLeft from "../../assets/button-left.svg";
import ButtonRight from "../../assets/button-right.svg";

/**
 * Props for the Pagination component.
 * @interface
 * @property {number} count - The total number of pages.
 * @property {number} currentIndex - The current active page index.
 * @property {(index: number) => void} onChange - A function that is called when the active page index is changed.
 */
interface PaginationProps {
  count: number;
  currentIndex: number;
  onChange: (index: number) => void;
}

/**
 * Renders a pagination component with left and right buttons to navigate between pages.
 * @param {Object} props - The component props.
 * @param {number} props.count - The total number of pages.
 * @param {number} props.currentIndex - The current active page index.
 * @param {Function} props.onChange - The function to be called when the active page index changes.
 * @returns {JSX.Element} - The Pagination component.
 */
const Pagination = ({ count, currentIndex, onChange }: PaginationProps) => {
  return (
    <div className="pagination">
      <button
        className="pagination__button pagination__left-button"
        onClick={() => onChange(currentIndex - 1)}
        disabled={currentIndex === 0}
      >
        <img src={ButtonLeft} alt="Previous" />
      </button>
      <span className="pagination__index">{currentIndex + 1}</span>
      <button
        className="pagination__button pagination__right-button"
        onClick={() => onChange(currentIndex + 1)}
        disabled={currentIndex === count - 1}
      >
        <img src={ButtonRight} alt="Next" />
      </button>
    </div>
  );
};

export default Pagination;
