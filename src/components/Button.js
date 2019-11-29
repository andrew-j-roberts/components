// src/components/Button.js

import React from "react";
import PropTypes from "prop-types";
import { Button as ReakitButton } from "reakit/Button";
import styled from "styled-components";
import {
  background,
  border,
  layout,
  position,
  space,
  typography,
  compose,
  variant
} from "styled-system";

const StyledButton = styled(ReakitButton)(
  // styled-system style prop categories
  compose(background, border, layout, position, space, typography),
  // defaults
  {
    borderRadius: "3px",
    boxSizing: "border-box"
  },
  // exposed variants that **restrict** design choices
  variant({
    variants: {
      action: {
        backgroundColor: "action",
        color: "white",
        "&:hover": {
          filter: "brightness(115%)"
        },
        "&:focus": {
          filter: "brightness(115%)"
        }
      },
      "action-outline": {
        bg: "inherit",
        border: "solid",
        borderColor: "action",
        borderWidth: "2px",
        color: "action",
        "&:hover": {
          filter: "brightness(115%)"
        },
        "&:focus": {
          filter: "brightness(115%)"
        }
      },
      inaction: {
        backgroundColor: "inaction",
        color: "white",
        "&:hover": {
          filter: "brightness(115%)"
        },
        "&:focus": {
          filter: "brightness(115%)"
        }
      },
      "inaction-outline": {
        bg: "inherit",
        border: "solid",
        borderColor: "inaction",
        borderWidth: "2px",
        color: "inaction",
        "&:hover": {
          filter: "brightness(115%)"
        },
        "&:focus": {
          filter: "brightness(115%)"
        }
      },

      error: {
        backgroundColor: "error",
        color: "white",
        "&:hover": {
          filter: "brightness(115%)"
        },
        "&:focus": {
          filter: "brightness(115%)"
        }
      },
      "error-outline": {
        bg: "inherit",
        border: "solid",
        borderColor: "error",
        borderWidth: "2px",
        color: "error",
        "&:hover": {
          filter: "brightness(115%)"
        },
        "&:focus": {
          filter: "brightness(115%)"
        }
      },
      success: {
        backgroundColor: "success",
        color: "white",
        "&:hover": {
          filter: "brightness(115%)"
        },
        "&:focus": {
          filter: "brightness(115%)"
        }
      },
      "success-outline": {
        bg: "inherit",
        border: "solid",
        borderColor: "success",
        borderWidth: "2px",
        color: "success",
        "&:hover": {
          filter: "brightness(115%)"
        },
        "&:focus": {
          filter: "brightness(115%)"
        }
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

Button.propTypes = {
  variant: PropTypes.oneOf([
    "action",
    "action-outline",
    "inaction",
    "inaction-outline",
    "success",
    "success-outline",
    "error",
    "error-outline"
  ])
};
