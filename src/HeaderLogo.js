// src/components/HeaderLink.js

import React from "react";
import styled from "styled-components";
import { color, layout, typography, compose } from "styled-system";
import { SvgInitialsBlock } from "./svg";
import Stack from "./Stack";

const StyledLogo = styled(SvgInitialsBlock)(compose(color, layout));

const StyledText = styled.h3(color, typography, {
  margin: "0"
});

/**
 * renders a styled Reach Router Link (`<a>` html element)
 * Exposed style prop categories: background, border, layout, position, space, typography
 */
export default function HeaderLogo() {
  return (
    <Stack spacing={1} alignItems="center">
      <StyledLogo color="brand" width="60px" height="60px" />
      <StyledText color="text.primary" fontFamily="header">
        Andrew J. Roberts
      </StyledText>
    </Stack>
  );
}
