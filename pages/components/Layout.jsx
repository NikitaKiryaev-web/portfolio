import React from "react";
import { Box } from "@chakra-ui/react";
import Header from './Header'

export default function Layout({ children, router }) {
  return (
    <Box as="main" p={['15px', null, null, '20px' ]}>
      <Header/>
      {children}
    </Box>
  );
}