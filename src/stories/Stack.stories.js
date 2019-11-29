// src/components/Stack.stories.js

import React from "react";
import styled from "styled-components";
import { Stack } from "../components";

const ChildElement = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => (props.height ? props.height : "50px")};
  width: 50px;
  background: #ccc;
`;

// Component Story Format
// https://storybook.js.org/docs/formats/component-story-format/
// if you format the story export like this, Storybook auto generates the docs tab using their DocsPage addon
export default {
  title: "Stack",
  component: Stack,
  parameters: {
    componentSubtitle: "Spaces child elements"
  }
};

// stories
export const row = () => (
  <Stack spacing={"large"}>
    <ChildElement height="100px">A</ChildElement>
    <ChildElement height="75px">B</ChildElement>
    <ChildElement>C</ChildElement>
  </Stack>
);

export const reversedRow = () => (
  <Stack isReversed spacing={"large"}>
    <ChildElement height="100px">A</ChildElement>
    <ChildElement height="75px">B</ChildElement>
    <ChildElement>C</ChildElement>
  </Stack>
);

export const column = () => (
  <Stack isColumn spacing={"large"}>
    <ChildElement height="100px">A</ChildElement>
    <ChildElement height="75px">B</ChildElement>
    <ChildElement>C</ChildElement>
  </Stack>
);

export const reversedColumn = () => (
  <Stack isColumn isReversed spacing={"large"}>
    <ChildElement height="100px">A</ChildElement>
    <ChildElement height="75px">B</ChildElement>
    <ChildElement>C</ChildElement>
  </Stack>
);
