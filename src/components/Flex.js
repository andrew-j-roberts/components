// src/components/Flex.js

import React from "react";
import styled from "@emotion/styled";
import { space, color, layout, flexbox } from "styled-system";

/**
 * Component that implements all options from styled-system's `flexbox` property
 */
const Flex = styled.div(
  {
    boxSizing: "border-box",
    display: "flex",
    minWidth: 0 // ensures the Flex can shrink below its minimum content size when used as a flex item
  },
  color,
  flexbox,
  layout,
  space
);

export default Flex;
