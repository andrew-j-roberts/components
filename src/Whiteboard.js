import React from "react";
import whiteboardSvg from "./svg/whiteboard.svg";
import { Box, Flex } from ".";

function Whiteboard({ height, width, children }) {
  return (
    <Flex
      height={height}
      width={width}
      backgroundImage={`url(${whiteboardSvg})`}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      alignItems="center"
      justifyContent="center"
    >
      {children}
    </Flex>
  );
}

export default Whiteboard;
