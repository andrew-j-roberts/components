import React from "react";
import styled from "styled-components";
import { css } from "@styled-system/css";
import { color, typography, compose } from "styled-system";

function TextRenderOptions({ as, className, children }) {
  if (as == null) {
    return <p className={className}>{children}</p>;
  }

  if (as == "i") {
    return <i className={className}>{children}</i>;
  }

  if (as == "u") {
    return <u className={className}>{children}</u>;
  }

  if (as == "abbr") {
    return <abbr className={className}>{children}</abbr>;
  }

  if (as == "cite") {
    return <cite className={className}>{children}</cite>;
  }

  if (as == "del") {
    return <del className={className}>{children}</del>;
  }

  if (as == "em") {
    return <em className={className}>{children}</em>;
  }

  if (as == "ins") {
    return <ins className={className}>{children}</ins>;
  }

  if (as == "kbd") {
    return <kbd className={className}>{children}</kbd>;
  }

  if (as == "mark") {
    return <mark className={className}>{children}</mark>;
  }

  if (as == "s") {
    return <s className={className}>{children}</s>;
  }

  if (as == "samp") {
    return <samp className={className}>{children}</samp>;
  }

  if (as == "sub") {
    return <sub className={className}>{children}</sub>;
  }

  if (as == "sup") {
    return <sup className={className}>{children}</sup>;
  }

  // default or error return <p>
  return <p className={className}>{children}</p>;
}

const StyledText = styled(TextRenderOptions)(
  compose(color, typography),
  css({ fontFamily: "content" })
);

function Text({ children, ...rest }) {
  return <StyledText {...rest}>{children}</StyledText>;
}

export default Text;
