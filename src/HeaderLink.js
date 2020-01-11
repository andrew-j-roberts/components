// src/components/HeaderLink.js

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
  variant
} from "styled-system";

/**
 * Exposed style prop categories: background, border, layout, position, space, typography
 */
function NavLink({ as = null, className, to, children }) {
  // if "as" not specified, render link as <a>
  if (as == null) {
    return (
      <a className={className} href={to}>
        {children}
      </a>
    );
  }
  // I think this is how I want to abstract this away, let me know if there's a better way :)
  // This lets the user pass in a render component (e.g. Reach Link, Gatsby Link)
  return React.cloneElement(as, { className: className, to: to });
}

const StyledNavLink = styled(NavLink)(
  compose(background, border, color, layout, position, space, typography),
  {
    boxSizing: "content-box",
    cursor: "pointer",
    display: "inline-block",
    textDecoration: "none",
    transition: "transform 0.2s ease, top 0.2s ease"
  },
  // exposed variants that restrict design decisions
  variant({
    variants: {
      active: {
        color: "brand",
        fontFamily: "header",
        fontSize: "1.5em",
        textShadow: `/* first layer at 1px */ -1px -1px 0px #000, 0px -1px 0px #000,
          1px -1px 0px #000, -1px 0px 0px #000, 1px 0px 0px #000, -1px 1px 0px #000,
          0px 1px 0px #000, 1px 1px 0px #000`,
        // a yellow bottom border with a black outline...
        borderImage: `url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg width='100%25' height='100%25' viewBox='0 0 102 13' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' xmlns:serif='http://www.serif.com/' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1;'%3E%3Cg transform='matrix(1,0,0,1,1,-30.4392)'%3E%3Cg transform='matrix(1.51185,0,0,0.979089,-26.7128,0.657431)'%3E%3Crect x='17.669' y='31.439' width='66' height='10' style='fill:rgb(255,255,0);stroke:black;stroke-width:1px;'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A") 0 0 12 0`,
        borderTop: "0px",
        borderLeft: "0px",
        borderRight: "0px",
        borderBottom: "10px solid",
        marginTop: "10px"
      },
      default: {
        color: "text.link",
        fontFamily: "header",
        fontSize: "1.5em",
        "&:hover": {
          color: "text.link-focused",
          transform: "translate(0px, -2px)",
          borderBottom: "2px solid black"
        },
        "&:focus": {
          color: "text.link-focused",
          transform: "translate(0px, -2px)",
          borderBottom: "2px solid black"
        }
      }
    }
  })
);

function HeaderLink({ as, isActive, to, children }) {
  return (
    <StyledNavLink as={as} to={to} variant={isActive ? "active" : "default"}>
      {children}
    </StyledNavLink>
  );
}
export default HeaderLink;
