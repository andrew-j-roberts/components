import React from "react";

function SvgMinusOutline(props) {
  return (
    <svg
      viewBox="0 0 90 30"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={1.5}
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth={10}
        d="M15.565 33.447h72.744v26.745H15.565z"
        transform="matrix(1.09975 0 0 .74782 -12.118 -20.012)"
      />
    </svg>
  );
}

export default SvgMinusOutline;
