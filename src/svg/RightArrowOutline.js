import React from "react";

function SvgRightArrowOutline(props) {
  return (
    <svg
      viewBox="0 0 100 100"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={1.5}
      {...props}
    >
      <path
        d="M54.28 41.07V27.675L90 50 54.28 72.325V58.93H10V41.07h44.28z"
        fill="none"
        stroke="currentColor"
        strokeWidth={10}
      />
    </svg>
  );
}

export default SvgRightArrowOutline;
