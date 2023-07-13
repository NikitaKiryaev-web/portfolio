import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
// 2. Add your color mode config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#F5F5F5")(props),
    },
  }),
};

const components = {
  Link: {
    baseStyle: (props) => ({
      position: "relative",
      _before: {
        content: "''",
        position: "absolute",
        top: "100%",
        left: "0",
        width: "0%",
        height: "2px",
        bg: mode("#1a202c", "red")(props),
        transition: ".3s",
      },
      _hover: {
        textDecoration: "none",
        _before: {
          width: "100%",
        },
      },
    }),
  },
};

// 3. extend the theme
const theme = extendTheme({ config, styles, components });

export default theme;
