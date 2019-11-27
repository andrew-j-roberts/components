// src/components/Box.js

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  color,
  background,
  border,
  layout,
  position,
  space,
  typography
} from "styled-system";

const StyledBox = styled.div(
  {
    boxSizing: "border-box"
  },
  color,
  background,
  border,
  layout,
  position,
  space,
  typography
);

/**
 * Renders a div.
 * Exposed style prop categories:
 * background,
 * border,
 * color,
 * layout,
 * position,
 * space,
 * shadow,
 * typography
 */
export default function Box(props) {
  return <StyledBox {...props}>{props.children}</StyledBox>;
}
