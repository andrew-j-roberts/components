// src/components/Flex.js

import React from "react";
import styled from "styled-components";
import {
  background,
  border,
  color,
  grid,
  flexbox,
  layout,
  position,
  space,
  shadow,
  typography
} from "styled-system";

const StyledGrid = styled.div(
  {
    boxSizing: "border-box",
    display: "grid",
    minWidth: 0 // ensures the Flex can shrink below its minimum content size when used as a flex item
  },
  color,
  background,
  border,
  grid,
  layout,
  position,
  space,
  typography
);

/**
 * Renders a div that is styled with `display: flex`.
 * Exposed style prop categories:
 * background,
 * border,
 * color,
 * flexbox,
 * layout,
 * position,
 * space,
 * shadow,
 * typography
 */
export default function Grid(props) {
  return <StyledGrid {...props}>{props.children}</StyledGrid>;
}
