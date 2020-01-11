import React from "react";

function SvgLeftArrowSolid(props) {
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
        d="M45.72 41.07V27.675L10 50l35.72 22.325V58.93H90V41.07H45.72z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={10}
      />
    </svg>
  );
}

export default SvgLeftArrowSolid;
