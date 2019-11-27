// src/components/Flex.stories.js

import React from "react";
import styled from "styled-components";
import { Flex } from "../components";

const ChildElement = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => (props.height ? props.height : "50px")};
  width: 50px;
  background: #ccc;
`;

const children = (
  <>
    <ChildElement height="100px">A</ChildElement>
    <ChildElement height="75px">B</ChildElement>
    <ChildElement>C</ChildElement>
  </>
);

// Component Story Format
// https://storybook.js.org/docs/formats/component-story-format/
// if you format the story export like this, Storybook auto generates the docs tab using their DocsPage addon
export default {
  title: "Flex",
  component: Flex,
  parameters: {
    componentSubtitle: "Flexbox layout component"
  }
};

// stories
export const row = () => <Flex>{children}</Flex>;

export const column = () => <Flex flexDirection="column">{children}</Flex>;

export const fillSpace = () => (
  <div id="example-parent-div" style={{ height: "100px", width: "100px" }}>
    <Flex bg="gray" width="100%" height="100%"></Flex>
  </div>
);

export const verticallyCenteredRow = () => (
  <Flex alignItems="center">{children}</Flex>
);
