// src/components/Button.stories.js

import React from "react";
import Button from "../components/Button";
import { Flex, Stack } from "../components";

// Component Story Format
// https://storybook.js.org/docs/formats/component-story-format/
// if you format the story export like this, Storybook auto generates the docs tab using their DocsPage addon
export default {
  title: "Button",
  component: Button,
  parameters: {
    componentSubtitle: "press me"
  }
};

// stories
export const textVariants = () => (
  <Stack isColumn px="3">
    <Stack spacing="1" height="35px" alignItems="center" px="2">
      <Stack spacing="1">
        <Button variant="action">Action</Button>
        <Button variant="inaction">Cancel</Button>
        <Button variant="success">Confirm</Button>
        <Button variant="error">Delete</Button>
      </Stack>
      <Stack spacing="1">
        <Button variant="action-outline">Action</Button>
        <Button variant="inaction-outline">Cancel</Button>
        <Button variant="success-outline">Confirm</Button>
        <Button variant="error-outline">Delete</Button>
      </Stack>
    </Stack>
    <Stack bg="#292929" spacing="1" height="35px" alignItems="center" px="2">
      <Stack spacing="1">
        <Button variant="action">Action</Button>
        <Button variant="inaction">Cancel</Button>
        <Button variant="success">Confirm</Button>
        <Button variant="error">Delete</Button>
      </Stack>
      <Stack spacing="1">
        <Button variant="action-outline">Action</Button>
        <Button variant="inaction-outline">Cancel</Button>
        <Button variant="success-outline">Confirm</Button>
        <Button variant="error-outline">Delete</Button>
      </Stack>
    </Stack>
  </Stack>
);
textVariants.story = {
  decorators: [
    storyFn => (
      <Flex width="100%" alignItems="center" justifyContent="center">
        {storyFn()}
      </Flex>
    )
  ]
};
