// src/components/Stack.js

import React from "react";
import PropTypes from "prop-types";
import Box from "./Box";
import Flex from "./Flex";

/**
 * Renders a Flex and spaces its child elements by wrapping each of them in a Box styled with the appropriate margin.
 * Child spacing is based on isColumn and isReversed prop shorthands.  Stack defaults to row, i.e. spacing applied to mr.
 */
export default function Stack({
  isColumn,
  isReversed,
  spacing,
  children,
  ...rest
}) {
  // determine margins

  let marginTop = isColumn && isReversed ? spacing : null;

  let marginRight = isColumn || isReversed ? null : spacing;

  let marginBottom = isColumn && !isReversed ? spacing : null;

  let marginLeft = !isColumn && isReversed ? spacing : null;

  // determine flexDirection
  let flexDirection =
    isColumn && !isReversed
      ? "column"
      : isColumn && isReversed
      ? "column-reverse"
      : !isColumn && !isReversed
      ? "row"
      : !isColumn && isReversed
      ? "row-reverse"
      : "row"; // most of my stacks are horizontal.  change my mind.

  return (
    <Flex flexDirection={flexDirection} {...rest}>
      {React.Children.map(children, (child, i) => {
        return (
          <Box
            mt={i == children.length - 1 ? null : marginTop}
            mr={i == children.length - 1 ? null : marginRight}
            mb={i == children.length - 1 ? null : marginBottom}
            ml={i == children.length - 1 ? null : marginLeft}
          >
            {child}
          </Box>
        );
      })}
    </Flex>
  );
}

Stack.propTypes = {
  isColumn: PropTypes.bool,
  isReversed: PropTypes.bool
};

Stack.defaultProps = {
  isColumn: false,
  isReversed: false
};
