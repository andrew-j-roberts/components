// src/components/Box.stories.js

import React from "react";
import { Box } from "../components";

// Component Story Format
// https://storybook.js.org/docs/formats/component-story-format/
// if you format the story export like this, Storybook auto generates the docs tab using their DocsPage addon
export default {
  title: "Box",
  component: Box,
  parameters: {
    componentSubtitle: "a basic building block"
  }
};

// stories
export const basic = () => <Box bg="#CCC" width="100px" height="100px" />;

export const withChild = () => (
  <Box bg="#CCC" width="100px" height="100px">
    <Box bg="#FFF" width="25px" height="25px" />
  </Box>
);
