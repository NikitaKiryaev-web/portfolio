import { Flex, Heading, Spacer, IconButton, useColorModeValue, useColorMode, Link } from "@chakra-ui/react"
import {FaMoon, FaSun} from 'react-icons/fa'
import NextLink from 'next/link'

export default function Header() {
    const colorModeIcon = useColorModeValue(<FaMoon/>, <FaSun/>);
    const { toggleColorMode } = useColorMode();
    
    return (
    <Flex justifyContent={'space-between'} alignItems={'center'} pb={'30px'}>
      <Heading fontSize={'2xl'} mr={'30px'}>Nick`s portfolio</Heading>
      <Link as={NextLink} href={'/'} mr={'30px'}>Home</Link>
      <Link as={NextLink} href={'/'} mr={'30px'}>About me</Link>
      <Link as={NextLink} href={'/'} mr={'30px'}>Works</Link>
      <Spacer />
      <IconButton icon={colorModeIcon} onClick={toggleColorMode}>   
      </IconButton>
    </Flex>
    )
}