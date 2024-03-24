import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function MenuItem({ text, to, children }) {
  return (
    <>
      <Link to={to} className="mr-5 hover:text-gray-900 font-semibold">
        {children || text}
      </Link>
    </>
  );
}

MenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  children: PropTypes.node, // Add this line to validate children prop
};
