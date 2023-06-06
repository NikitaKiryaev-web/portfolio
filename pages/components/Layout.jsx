import React from "react";
import { Box } from "@chakra-ui/react";

export default function Layout({ children, router }) {
  return (
    <>
      <Box onClick={() => console.log("click")} as="main">
        Hello world!!!
      </Box>
      {children}
    </>
  );
}
