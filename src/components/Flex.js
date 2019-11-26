// src/components/Flex.js

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { space, color, layout, flexbox } from "styled-system";

const Flexbox = styled.div(
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

/**
 * renders a div that is styled with `display: flex`.  Exposed style prop categories: color, flexbox, layout, space.
 */
export default function Flex(props) {
  return <Flexbox {...props}>{props.children}</Flexbox>;
}

Flex.propTypes = {
  /** background */
  bg: PropTypes.string,
  /** margin */
  m: PropTypes.string,
  /** margin top */
  mt: PropTypes.string,
  /** margin right */
  mr: PropTypes.string,
  /** margin bottom*/
  mb: PropTypes.string,
  /** margin left*/
  ml: PropTypes.string,
  /** margin left and right*/
  mx: PropTypes.string,
  /** margin top and bottom*/
  my: PropTypes.string,
  /** padding*/
  p: PropTypes.string,
  /** padding top*/
  pt: PropTypes.string,
  /** padding right*/
  pr: PropTypes.string,
  /** padding bottom*/
  pb: PropTypes.string,
  /** padding left*/
  pl: PropTypes.string,
  /** padding left and right */
  px: PropTypes.string,
  /** padding top and bottom*/
  py: PropTypes.string
};

Flex.defaultProps = {
  bg: null
};
