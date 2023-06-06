import React from "react";
import { Box } from "@chakra-ui/react";

export default function Layout({ children, router }) {
  return (
    <>
      <Box as="main">
        Hello world!!!
      </Box>
      {children}
    </>
  );
}
