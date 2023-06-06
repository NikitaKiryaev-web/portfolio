import Layout from "./components/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import theme from '../theme/theme'

function App({ Component, pageProps, router }) {
  return (
    <Layout router={router}>
      <ChakraProvider theme={theme}>
      <Component {...pageProps} key={router.route} />
      </ChakraProvider>
    </Layout>
  );
}

export default App;
