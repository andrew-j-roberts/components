// src/components/Flex.js

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  background,
  border,
  color,
  flexbox,
  layout,
  position,
  space,
  shadow,
  typography
} from "styled-system";

const Flexbox = styled.div(
  {
    boxSizing: "border-box",
    display: "flex",
    minWidth: 0 // ensures the Flex can shrink below its minimum content size when used as a flex item
  },
  color,
  background,
  border,
  flexbox,
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
export default function Flex(props) {
  return <Flexbox {...props}>{props.children}</Flexbox>;
}

Flex.propTypes = {
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
  py: PropTypes.string,
  /** color */
  color: PropTypes.string,
  /** background */
  bg: PropTypes.string,
  /** background */
  backgroundColor: PropTypes.string,
  /** opacity */
  opacity: PropTypes.string,
  /** fontFamily from theme */
  fontFamily: "header" || "content" || "mono",
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  lineHeight: PropTypes.string,
  letterSpacing: PropTypes.string,
  textAlign: PropTypes.string,
  fontStyle: PropTypes.string,
  /** height */
  height: PropTypes.string,
  minWidth: PropTypes.string,
  maxWidth: PropTypes.string,
  minHeight: PropTypes.string,
  maxHeight: PropTypes.string,
  size: PropTypes.string,
  display: PropTypes.string,
  verticalA: PropTypes.string,
  overflow: PropTypes.string,
  overflowX: PropTypes.string,
  overflowY: PropTypes.string,

  alignItems: PropTypes.string,
  alignContent: PropTypes.string,
  justifyItems: PropTypes.string,
  justifyContent: PropTypes.string,
  flexWrap: PropTypes.string,
  flexDirection: PropTypes.string,
  flex: PropTypes.string,
  flexGrow: PropTypes.string,
  flexShrink: PropTypes.string,
  flexBasis: PropTypes.string,
  justifySelf: PropTypes.string,
  alignSelf: PropTypes.string,
  order: PropTypes.string,

  background: PropTypes.string,
  backgroundImage: PropTypes.string,
  backgroundSize: PropTypes.string,
  backgroundPosition: PropTypes.string,
  backgroundRepeat: PropTypes.string,

  border: PropTypes.string,
  borderWidth: PropTypes.string,
  borderStyle: PropTypes.string,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.string,
  borderTop: PropTypes.string,
  borderTopWidth: PropTypes.string,
  borderTopStyle: PropTypes.string,
  borderTopColor: PropTypes.string,
  borderTopLeftRadius: PropTypes.string,
  borderTopRightRadius: PropTypes.string,
  borderRight: PropTypes.string,
  borderRightWidth: PropTypes.string,
  borderRightStyle: PropTypes.string,
  borderRightColor: PropTypes.string,
  borderBottom: PropTypes.string,
  borderBottomWidth: PropTypes.string,
  borderBottomStyle: PropTypes.string,
  borderBottomColor: PropTypes.string,
  borderBottomLeftRadius: PropTypes.string,
  borderBottomRightRadius: PropTypes.string,
  borderLeft: PropTypes.string,
  borderLeftWidth: PropTypes.string,
  borderLeftStyle: PropTypes.string,
  borderLeftColor: PropTypes.string,
  borderX: PropTypes.string,
  borderY: PropTypes.string,

  position: PropTypes.string,
  zIndex: PropTypes.string,
  top: PropTypes.string,
  right: PropTypes.string,
  bottom: PropTypes.string,
  left: PropTypes.string,

  textShadow: PropTypes.string,
  boxShadow: PropTypes.string
};
