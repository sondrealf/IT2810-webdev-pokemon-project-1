import "./TypeCircle.css";

/**
 * Interface for the TypeCircle component props.
 * @interface ITypeCircle
 * @property {string} [primaryType] - The primary type of the circle.
 * @property {string} [secondaryType] - The secondary type of the circle.
 */
interface ITypeCircle {
  primaryType?: string;
  secondaryType?: string;
}

/**
 * Renders a circle with a primary and secondary type color.
 * @param {Object} props - The component props.
 * @param {string} [props.primaryType] - The primary type of the circle.
 * @param {string} [props.secondaryType] - The secondary type of the circle.
 * @returns {JSX.Element} - A JSX.Element representing the TypeCircle component.
 */
const TypeCircle = (props: ITypeCircle) => {
  // console.log("TypeCircle__typeColor-" + props.primaryType);

  return (
    <div className="TypeCircle__container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="15"
        viewBox="0 0 16 15"
        fill="none"
      >
        <path
          d="M7.50488 15C5.51576 15 3.6081 14.2098 2.20158 12.8033C0.795059 11.3968 0.00488281 9.48912 0.00488281 7.5C0.00488281 5.51088 0.795059 3.60322 2.20158 2.1967C3.6081 0.790177 5.51576 3.00349e-07 7.50488 0L7.50488 7.5V15Z"
          className={"TypeCircle__typeColor-" + props.primaryType}
        />
        <path
          d="M7.50488 0C9.49401 0 11.4017 0.790176 12.8082 2.1967C14.2147 3.60322 15.0049 5.51088 15.0049 7.5C15.0049 9.48912 14.2147 11.3968 12.8082 12.8033C11.4017 14.2098 9.49401 15 7.50488 15L7.50488 7.5L7.50488 0Z"
          className={
            props.secondaryType != undefined
              ? "TypeCircle__typeColor-" + props.secondaryType
              : "TypeCircle__typeColor-" + props.primaryType
          }
        />
      </svg>
    </div>
  );
};
export default TypeCircle;
