import PropTypes from "prop-types";
export default function Button({ classes, children }) {
  return (
    <button
      className={`text-p-xs md:text-p-sm bg-stone-950 text-stone-50 p-3 font-semibold truncate hover:bg-black hover:bg-opacity-65 hover:border-1 hover:border-black ${classes}`}
    >
      {children}
    </button>
  );
}
Button.propTypes = {
  classes: PropTypes.string,
  children: PropTypes.node.isRequired,
};
