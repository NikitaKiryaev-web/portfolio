import {
  Flex,
  Heading,
  Spacer,
  IconButton,
  useColorModeValue,
  useColorMode,
  Link,
  Box,
  Text,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import NextLink from "next/link";

export default function Header() {
  const colorModeIcon = useColorModeValue(<FaMoon />, <FaSun />);
  const { colorMode, toggleColorMode } = useColorMode();
  console.log(colorMode);

  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      pt={["15px", null, null, "20px"]}
      px={["15px", null, null, "20px"]}
      pb={"30px"}
      as={"header"}
    >
      <Heading fontSize={"2xl"} mr={"30px"}>
        Nick`s portfolio
      </Heading>
      <Link as={NextLink} href={"/"} mr={"30px"}>
        Home
      </Link>
      <Link as={NextLink} href={"/"} mr={"30px"}>
        About me
      </Link>
      <Link as={NextLink} href={"/"} mr={"30px"}>
        Works
      </Link>
      <Spacer />
      <Box>
        <Text as="span" mr={"10px"}>
          Change theme
        </Text>
        <IconButton
          border={"1px"}
          borderRadius={"10px"}
          icon={colorModeIcon}
          onClick={toggleColorMode}
        ></IconButton>
      </Box>
    </Flex>
  );
}
