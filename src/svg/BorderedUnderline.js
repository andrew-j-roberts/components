import React from "react";

function SvgBorderedUnderline(props) {
  return (
    <svg
      viewBox="0 0 102 13"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={1.5}
      {...props}
    >
      <path
        fill="#ff0"
        stroke="#000"
        strokeWidth={2}
        d="M17.669 31.439h66.144v10.227H17.669z"
        transform="matrix(1.51185 0 0 .97909 -25.713 -29.782)"
      />
    </svg>
  );
}

export default SvgBorderedUnderline;
