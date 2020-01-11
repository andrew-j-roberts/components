// src/components/Link.js

import React from "react";
import styled from "styled-components";
import {
  background,
  border,
  color,
  layout,
  position,
  space,
  typography,
  compose,
  variant,
  shadow
} from "styled-system";

/**
 * Exposed style prop categories: background, border, layout, position, space, typography
 */
function NavLink({ as = null, className, to, children, ...rest }) {
  // if "as" not specified, render link as <a>
  if (as == null) {
    return (
      <a className={className} href={to} {...rest}>
        {children}
      </a>
    );
  }
  // I think this is how I want to abstract this away, let me know if there's a better way :)
  // This lets the user pass in a render component (e.g. Reach Link, Gatsby Link)
  return React.cloneElement(as, { className: className, to: to, ...rest });
}

const StyledNavLink = styled(NavLink)(
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
  {
    boxSizing: "content-box",
    cursor: "pointer",
    display: "inline-block",
    textDecoration: "none"
  }
);

function Link({ as, isActive, to, children, ...rest }) {
  return (
    <StyledNavLink as={as} to={to} {...rest}>
      {children}
    </StyledNavLink>
  );
}
export default Link;
