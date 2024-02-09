import { useState } from "react";
import "./TextExpander.css";

export default function TextExpanderMain() {
  return (
    <div>
      <div>
        <TextExpander lineHeight="2">
          Trying to achieve MAXIMUM RESUABILITY by passing all these props into
          component and making a component API. This text expander has highky
          reusability and it hides all the complexity from the user.
        </TextExpander>

        <TextExpander
          collapsedNumWords={20}
          expandButtonText="Show text"
          collapseButtonText="Collapse text"
          buttonColor="#FF6EFF"
        >
          Space travel requires some seriously amazing technology and
          collaboration between countries, private companies, and international
          space organizations. And while it's not always easy (or cheap), the
          results are out of this world. Think about the first time humans
          stepped foot on the moon or when rovers were sent to roam around on
          Mars.
        </TextExpander>

        <TextExpander
          expanded={true}
          className="text-expander-box"
          buttonColor="#7DF9FF"
        >
          Aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Space missions
          have given us incredible insights into our universe and have inspired
          future generations to keep reaching for the stars. Space travel is a
          pretty cool thing to think about. Who knows what we'll discover next!
        </TextExpander>
      </div>
    </div>
  );
}

function TextExpander({
  expanded = false,
  className = "text-expander-box",
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "#FFFF00",
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
      >
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
