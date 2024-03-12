import PropTypes from "prop-types";

export default function MenuItem({ text, href, children }) {
  return (
    <>
      <a className="mr-5 hover:text-gray-900 font-semibold" href={href}>
        {children || text}
      </a>
    </>
  );
}

MenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  children: PropTypes.node, // Add this line to validate children prop
};
