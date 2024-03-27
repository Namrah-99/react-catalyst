import PropTypes from "prop-types";
import { useState } from "react";

export default function TextExpander({
  expanded = false,
  className = "text-expander-box",
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "#0eb1ea",
  buttonClassName = "",
  lineHeight,
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + " ...";

  const buttonStyle = {
    color: buttonColor,
    border: "none",
    background: "none",
    cursor: "pointer",
    font: "inherit",
    marginLeft: "6px",
  };

  const textStyle = {
    lineHeight: lineHeight,
  };

  return (
    <div className={className} style={textStyle}>
      <span>{displayText}</span>
      <button
        onClick={() => setIsExpanded((isExpanded) => !isExpanded)}
        style={buttonStyle}
        className={buttonClassName}
      >
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}

TextExpander.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  expanded: PropTypes.bool,
  collapsedNumWords: PropTypes.number,
  expandButtonText: PropTypes.string,
  collapseButtonText: PropTypes.string,
  buttonColor: PropTypes.string,
  buttonClassName: PropTypes.string,
  lineHeight: PropTypes.string,
};
