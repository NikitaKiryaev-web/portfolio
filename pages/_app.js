import Layout from "./components/Layout";
import Head from "next/head";

function App({ Component, pageProps, router }) {
  return (
    <Layout router={router}>
      <Component {...pageProps} key={router.route} />
    </Layout>
  );
}

export default App;
