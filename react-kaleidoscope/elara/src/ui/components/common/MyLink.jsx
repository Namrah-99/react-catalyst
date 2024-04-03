import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function MyLink({ text, to, classes, children }) {
  return (
    <Link
      to={to}
      className={`mr-5 hover:text-gray-900 ${
        text && "font-semibold"
      } ${classes}`}
    >
      {children || text}
    </Link>
  );
}

MyLink.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string.isRequired,
  classes: PropTypes.string,
  children: PropTypes.node, // Add this line to validate children prop
};
