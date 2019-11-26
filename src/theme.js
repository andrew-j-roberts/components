// theme.js

// basic styled-system theme implementation
const theme = {
  colors: {
    black: "#000000",
    white: "#fff",
    blue: "#007ce0",
    navy: "#004175",
    brown: "#aeced2",
    //
    light: {
      primary: {
        0: "",
        1: "",
        2: ""
      }
    },
    dark: {
      primary: {
        0: "",
        1: "",
        2: ""
      }
    }
  },
  fonts: {
    header: "",
    content: "",
    mono: ""
  },
  fontSizes: [12, 14, 16, 20, 24, 32],
  space: [0, 4, 8, 16, 32]
};

// aliases
// - space
theme.space.small = theme.space[1];
theme.space.medium = theme.space[2];
theme.space.large = theme.space[3];
// - fontSizes
theme.fontSizes.body = theme.fontSizes[2];
