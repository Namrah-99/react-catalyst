import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function MyLink({ text, to, children }) {
  return (
    <Link
      to={to}
      className={`mr-5 hover:text-gray-900 ${text && "font-semibold"}`}
    >
      {children || text}
    </Link>
  );
}

MyLink.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  children: PropTypes.node, // Add this line to validate children prop
};
