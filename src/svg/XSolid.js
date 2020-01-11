import React from "react";

function SvgXSolid(props) {
  return (
    <svg
      viewBox="0 0 88 88"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={1.5}
      {...props}
    >
      <path
        d="M43.89 29.749l24.75-24.75 14.142 14.143-24.75 24.749 24.75 24.749L68.64 82.782l-24.75-24.75-24.748 24.75L5 68.64l24.749-24.75-24.75-24.748L19.143 5 43.89 29.749z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={10}
      />
    </svg>
  );
}

export default SvgXSolid;
