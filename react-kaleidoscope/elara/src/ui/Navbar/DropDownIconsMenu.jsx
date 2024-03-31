import PropTypes from "prop-types";

export default function DropDownIconsMenu({
  icon,
  ariaLabel,
  href,
  title,
  children,
  modalId,
}) {
  const isMediumScreen = window.innerWidth <= 768; // Define your breakpoint

  return (
    // <div className="dropdown dropdown-hover dropdown-end">
    //   <a
    //     className="p-2"
    //     aria-label={ariaLabel}
    //     href={href}
    //     title={title}
    //     tabIndex={0}
    //   >
    //     {icon}
    //   </a>
    //   {children}
    // </div>
    <>
      {isMediumScreen ? (
        <a className="drawer-button">
          <label htmlFor={modalId} className="inline-flex drawer-button">
            {icon}
          </label>
        </a>
      ) : (
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
      )}

      <div className="md:hidden drawer drawer-end w-0 z-40">
        <input
          id={modalId}
          type="checkbox"
          className="inline-flex drawer-toggle"
        />

        <div className="drawer-side">
          <label
            htmlFor={modalId}
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="w-full min-h-1/2 bg-neutral-400/45 border-l-2 border-neutral-400/45 text-gray-900">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

DropDownIconsMenu.propTypes = {
  icon: PropTypes.any.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  modalId: PropTypes.string,
};
