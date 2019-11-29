// theme.js

/**
 * base theme object
 */
const theme = {
  fonts: {
    header: "",
    content: "",
    mono: ""
  },
  fontSizes: [12, 14, 16, 20, 24, 32],
  space: [0, 4, 8, 16, 32]
};

/**
 * aliases
 */
// space
theme.space.small = theme.space[1];
theme.space.medium = theme.space[2];
theme.space.large = theme.space[3];
// typography
theme.fontSizes.body = theme.fontSizes[2];

/**
 * themes
 */
export const LightTheme = {
  ...theme,
  colors: {
    // base colors
    white: "#F8F8FF",
    black: "#121212",
    // brand colors
    brand: {},
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

export const DarkTheme = {
  ...theme,
  colors: {
    black: "#000000",
    white: "#ffffff",
    primaryBg: {
      0: "#121212",
      1: "#BAC181",
      2: "#888888DB"
    },
    secondaryBg: {
      0: "",
      1: "",
      2: ""
    },
    primaryText: {
      active: "#FFFFFFDE",
      default: "#FFFFFF99",
      disabled: "#FFFFFF61"
    },
    secondaryText: {}
  }
};
