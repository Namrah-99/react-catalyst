import PropTypes from "prop-types";

export default function DropDownIconsMenu({
  icon,
  ariaLabel,
  href,
  title,
  children,
}) {
  return (
    <div className="dropdown dropdown-hover dropdown-end">
      <a
        className="p-2"
        aria-label={ariaLabel}
        href={href}
        title={title}
        tabIndex={0}
      >
        {icon}
      </a>
      {children}
    </div>
  );
}

DropDownIconsMenu.propTypes = {
  icon: PropTypes.any.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
