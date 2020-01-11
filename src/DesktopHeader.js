// src/components/Button.js

import React from "react";
import { Link } from "@reach/router";
import { HeaderLink, HeaderLogo, Flex, Stack } from ".";

/**
 * renders a `<Flex>` f.
 * Exposed style prop categories: background, border, layout, position, space, typography
 */
export default function DesktopHeader(props) {
  return (
    <header>
      <nav>
        <Flex
          height="66px"
          width="100vw"
          alignItems="center"
          justifyContent="space-between"
          px={"large"}
        >
          <HeaderLogo />
          <Stack spacing={"large"} alignItems="center">
            <HeaderLink as={Link} to="">
              Blog
            </HeaderLink>
            {/* <Link to="/">Test</Link> */}
            <HeaderLink isActive={true}>Doodles</HeaderLink>
            <HeaderLink>Books</HeaderLink>
            <HeaderLink>About</HeaderLink>
          </Stack>
        </Flex>
      </nav>
    </header>
  );
}
