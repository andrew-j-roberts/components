// .storybook/themeDecorator.js
import React from "react";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "../src/theme";

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={LightTheme}>{storyFn()}</ThemeProvider>
);

export default ThemeDecorator;
