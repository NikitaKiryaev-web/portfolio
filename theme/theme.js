import { extendTheme } from '@chakra-ui/react';
import {mode} from '@chakra-ui/theme-tools';
// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// const styles = {
//     global: props => ({
//         body: {
//             bg: mode('black', 'white')(props)
//         }
//     })
// }

const components = {
    Button: {
        baseStyle: props => ({
            bg: mode('red, grey')(props),
            color: mode('red', 'grey')(props)
        })
    }
}

// 3. extend the theme
const theme = extendTheme({ config, components })

export default theme