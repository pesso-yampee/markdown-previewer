import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpDownLeftRight,
  faDownLeftAndUpRightToCenter,
} from "@fortawesome/free-solid-svg-icons";

export function Button(): JSX.Element {
  const [isExpanded, setIsExpanded] = useState<Boolean>(false);

  function toggleExpanded(e: React.MouseEvent<HTMLButtonElement>) {
    setIsExpanded(!isExpanded);
    manipulateElements();

    function manipulateElements() {
      const parent = e.currentTarget.parentNode;
      const header = parent?.parentNode;
      const contents = header?.parentElement;
      const brotherElement =
        contents?.id === "editor"
          ? contents?.nextElementSibling
          : contents?.previousElementSibling;

      contents?.classList.toggle("is-active");
      brotherElement?.classList.toggle("is-hidden");
    }
  }

  const buttonStyle = {
    padding: 0,
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
  };

  return (
    <button
      type="button"
      onClick={(e) => toggleExpanded(e)}
      style={buttonStyle}
    >
      <FontAwesomeIcon
        icon={!isExpanded ? faUpDownLeftRight : faDownLeftAndUpRightToCenter}
        size="2xl"
        transform={{ rotate: isExpanded ? 0 : 45 }}
      />
    </button>
  );
}
