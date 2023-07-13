import { Box } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, router }) {
  return (
    <Box minHeight={"100vh"} display={"flex"} flexDirection={"column"}>
      <Header />
      <Box flex={"1 0 auto"} as="main">
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
