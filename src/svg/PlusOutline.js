import React from "react";

function SvgPlusOutline(props) {
  return (
    <svg
      viewBox="0 0 90 90"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={1.5}
      {...props}
    >
      <path
        d="M5 35h30V5h20v30h30v20H55v30H35V55H5V35z"
        fill="none"
        stroke="currentColor"
        strokeWidth={10}
      />
    </svg>
  );
}

export default SvgPlusOutline;
