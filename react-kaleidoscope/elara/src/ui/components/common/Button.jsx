import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
export default function Button({ classes, navigateTo, children }) {
  const navigate = useNavigate();
  return (
    <button
      // className={`text-p-xs md:text-p-sm p-3 font-semibold truncate bg-stone-950 text-stone-50 hover:bg-black hover:bg-opacity-65 hover:border-1 hover:border-black ${classes}`}
      className={`text-p-xs md:text-p-sm p-3 truncate bg-stone-950 text-stone-50 hover:bg-black hover:bg-opacity-65 hover:border-1 hover:border-black ${classes}`}
      onClick={() => navigate(navigateTo || "/")}
    >
      {children}
    </button>
  );
}
Button.propTypes = {
  classes: PropTypes.string,
  navigateTo: PropTypes.string,
  children: PropTypes.node.isRequired,
};
