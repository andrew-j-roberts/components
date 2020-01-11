// src/components/SvgButton.js

import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import styled from "styled-components";
import { IconMap } from "./svg";
import {
  background,
  border,
  color,
  layout,
  position,
  space,
  typography,
  compose,
  variant
} from "styled-system";

const StyledIconButton = styled(Button)(
  // styled-system style prop categories
  compose(background, border, color, layout, position, space, typography),
  // defaults
  {
    background: "inherit",
    borderRadius: "3px",
    borderColor: "inaction",
    boxSizing: "border-box",
    "&:hover": {
      filter: "brightness(115%)"
    },
    "&:focus": {
      filter: "brightness(115%)"
    }
  }
);

/**
 * renders a `<button>` html element.  `icon` prop is mapped to included SVGs for commonly used icons.
 * if no icon prop is provided, the icon button's child element is rendered (e.g. an SvgElement)
 * Exposed style prop categories: background, border, layout, position, space, typography
 */
export default function IconButton(props) {
  return (
    <StyledIconButton {...props}>
      {IconMap[props.icon] ? IconMap[props.icon] : props.children}
    </StyledIconButton>
  );
}
