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
      bg: mode("#C53030", "grey")(props),
    },
  }),
};

const components = {
  Button: {
    baseStyle: (props) => ({
      bg: mode(`gray.100`, `whiteAlpha.200`)(props),
    }),
    variants: {
      ghost: (props) => ({
        bg: "green.600",
      }),
    },
  },
};

// 3. extend the theme
const theme = extendTheme({ config, components, styles });

export default theme;
