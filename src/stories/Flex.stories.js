// src/components/Task.stories.js

import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Flex from "../components/Flex";

const children = (
  <>
    <div>A</div>
    <div>B</div>
    <div>C</div>
  </>
);

storiesOf("Flex", module).add("default", () => <Flex>{children}</Flex>);
