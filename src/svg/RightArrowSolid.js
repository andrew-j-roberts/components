import React from "react";

function SvgRightArrowSolid(props) {
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
        d="M49.28 18.395V5L85 27.325 49.28 49.65V36.255H5v-17.86h44.28z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={10}
      />
    </svg>
  );
}

export default SvgRightArrowSolid;
