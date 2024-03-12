import { useState } from "react";
import PropTypes from "prop-types";

export default function DropdownMenu({ text, classes, children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <a className="mr-5 hover:text-gray-900 ">
      <details
        onMouseEnter={() => setIsMenuOpen(true)}
        onMouseLeave={() => setIsMenuOpen(false)}
        open={isMenuOpen}
      >
        <summary className={`custom-summary hover:text-primary ${classes}`}>
          {text.toLowerCase() === "sale" ? <a href="#">{text}</a> : text}
        </summary>
        {text.toLowerCase() !== "sale" && (
          <ul className="absolute top-full left-0 z-10 bg-white border border-gray-200 shadow-md menu md:menu-horizontal md:min-w-full w-full">
            {children}
          </ul>
        )}
      </details>
    </a>
  );
}

DropdownMenu.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  classes: PropTypes.string,
};
