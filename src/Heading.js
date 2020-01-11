import React from "react";
import styled from "styled-components";
import { css } from "@styled-system/css";
import {
  border,
  space,
  color,
  typography,
  compose,
  system
} from "styled-system";

function HeadingRenderOptions({ as, className, children }) {
  if (as == null) {
    return <h3 className={className}>{children}</h3>;
  }

  if (as == "h1") {
    return <h1 className={className}>{children}</h1>;
  }

  if (as == "h2") {
    return <h2 className={className}>{children}</h2>;
  }

  if (as == "h3") {
    return <h3 className={className}>{children}</h3>;
  }

  if (as == "h4") {
    return <h4 className={className}>{children}</h4>;
  }

  if (as == "h5") {
    return <h5 className={className}>{children}</h5>;
  }

  if (as == "h6") {
    return <h6 className={className}>{children}</h6>;
  }

  // default or error return <p>
  return <h3 className={className}>{children}</h3>;
}

const StyledHeading = styled(HeadingRenderOptions)(
  compose(border, color, typography, space),
  css({
    fontFamily: "header",
    display: "inline-box",
    boxSizing: "border-box"
  })
);

function Heading({ children, ...rest }) {
  return <StyledHeading {...rest}>{children}</StyledHeading>;
}

export default Heading;
