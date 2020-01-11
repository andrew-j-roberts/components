import React from "react";
import styled from "styled-components";
import { Box, Text } from ".";

const StyledBox = styled(Box)({
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)"
  },
  "&:focus-within": {
    transform: "scale(1.05)"
  }
});

function TagPill({ color, children, ...rest }) {
  // maybe add variants like: text, icon, etc. ?
  return (
    <StyledBox
      backgroundColor={color}
      border="1px solid"
      borderColor="primary"
      borderRadius="10px"
      boxSizing="border-box"
      p={1}
      {...rest}
    >
      {children}
    </StyledBox>
  );
}

export default TagPill;
