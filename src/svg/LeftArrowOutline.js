import React from "react";

function SvgLeftArrowOutline(props) {
  return (
    <svg
      viewBox="0 0 90 55"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={1.5}
      {...props}
    >
      <path
        d="M40.72 18.395V5L5 27.325 40.72 49.65V36.255H85v-17.86H40.72z"
        fill="none"
        stroke="currentColor"
        strokeWidth={10}
      />
    </svg>
  );
}

export default SvgLeftArrowOutline;
