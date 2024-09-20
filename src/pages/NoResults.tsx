import "../styles/App.css";

/**
 * Props for the NoResults component.
 */
interface NoResultsProps {
  title: string;
  underTitle: string;
}

/**
 * Renders a component to display a message when no results are found.
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the message.
 * @param {string} props.underTitle - The subtitle of the message.
 * @returns {JSX.Element} - A React component to display a message when no results are found.
 */
const NoResults = ({ title, underTitle }: NoResultsProps) => {
  return (
    <div className="no-results">
      <h1 className="no-results__title">{title}</h1>
      <h2 className="no-results__under-title">{underTitle}</h2>
    </div>
  );
};

export default NoResults;
