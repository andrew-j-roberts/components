import { configure, addDecorator } from "@storybook/react";
import themeDecorator from "./ThemeDecorator";

addDecorator(themeDecorator);

configure(require.context("../src", true, /\.stories\.(js|mdx)$/), module);
