import Layout from "./components/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import theme from '../theme/theme'

function App({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
    <Layout router={router}>
      <Component {...pageProps} key={router.route} />
    </Layout>
    </ChakraProvider>
  );
}

export default App;
