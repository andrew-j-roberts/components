// theme.js

/**
 * base theme object
 */
const theme = {
  fonts: {
    header: '"Source Sans Pro", sans-serif',
    content: '"Lato", sans-serif',
    code: '"Roboto Mono", monospace',
    whiteboard: '"Boogaloo", cursive'
  },
  fontSizes: [12, 14, 16, 20, 24, 32],
  fontWeights: [400, 700, 800, 900],
  space: [2, 4, 8, 16, 32]
};

/**
 * aliases
 */
// space
theme.space.small = theme.space[1];
theme.space.medium = theme.space[2];
theme.space.large = theme.space[3];
// typography
theme.fontSizes.pageTitle = theme.fontSizes[4];
theme.fontSizes.contentTitle = theme.fontSizes[3];
theme.fontSizes.contentSection = theme.fontSizes[2];
theme.fontSizes.body = theme.fontSizes[1];

/**
 * color themes
 */
export const LightTheme = {
  ...theme,
  colors: {
    // base colors
    primary: "#292929",
    background: "#f6f7f8",
    white: "#FFFFFF",
    black: "#121212",
    // brand colors
    brand: "#ffff00",
    // accent colors
    accents: {},
    // text
    text: {
      link: "#2a2a2a",
      "link-focused": "#000000",
      primary: "#292929",
      disabled: "#29292999" // 60% opacity
    },
    // support colors,
    action: "#0366d6",
    inaction: "#7e7e7e",
    success: "#32cb56",
    error: "#D32F2F"
  }
};

export const DarkTheme = {
  ...theme,
  colors: {
    // base colors
    white: "#F8F8FF",
    black: "#121212",
    // brand colors
    brand: "#3e9a4a",
    // accent colors
    accents: {},
    // text
    text: {
      primary: "#FFFFFF",
      disabled: "#FFFFFF99" // 60% opacity
    },
    // support colors,
    action: "#0366d6",
    inaction: "#7e7e7e",
    success: "#32cb56",
    error: "#D32F2F"
  }
};
