// src/components/Button.js

import React from "react";
import PropTypes from "prop-types";
import { Button as ReakitButton } from "reakit/Button";
import styled from "styled-components";
import {
  background,
  border,
  color,
  layout,
  position,
  space,
  shadow,
  typography,
  compose,
  variant
} from "styled-system";

const StyledButton = styled(ReakitButton)(
  // styled-system style prop categories
  compose(
    background,
    border,
    color,
    layout,
    position,
    space,
    typography,
    shadow
  ),
  // defaults
  {
    borderRadius: "8px",
    cursor: "pointer",
    padding: 8,
    "&:hover": {
      filter: "brightness(125%)",
      transform: "scale(1.1)"
    },
    "&:focus": {
      filter: "brightness(125%)",
      transform: "scale(1.1)"
    },
    transition: "all 0.2s ease-in-out"
  },
  // exposed variants that **restrict** design choices
  variant({
    variants: {
      action: {
        backgroundColor: "action",
        color: "white"
      },
      "action-outline": {
        bg: "inherit",
        border: "solid",
        borderColor: "action",
        borderWidth: "2px",
        color: "action"
      },
      inaction: {
        backgroundColor: "inaction",
        color: "white"
      },
      "inaction-outline": {
        bg: "inherit",
        border: "solid",
        borderColor: "inaction",
        borderWidth: "2px",
        color: "inaction"
      },
      error: {
        backgroundColor: "error",
        color: "white"
      },
      "error-outline": {
        bg: "inherit",
        border: "solid",
        borderColor: "error",
        borderWidth: "2px",
        color: "error"
      },
      success: {
        backgroundColor: "success",
        color: "white"
      },
      "success-outline": {
        bg: "inherit",
        border: "solid",
        borderColor: "success",
        borderWidth: "2px",
        color: "success"
      }
    }
  })
);

/**
 * renders a `<button>` html element.
 * Exposed style prop categories: background, border, layout, position, space, typography
 */
export default function Button(props) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}
