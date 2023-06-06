import { IconButton, useColorModeValue, VStack } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';
import {FaMoon, FaSun} from 'react-icons/fa'
import { Box, Button } from '@chakra-ui/react';

export default function Home() {
  const colorModeIcon = useColorModeValue(<FaMoon/>, <FaSun/>);
  const { toggleColorMode } = useColorMode();
  return (
    <VStack>
<IconButton icon={colorModeIcon} onClick={toggleColorMode}>   
    </IconButton>
    <Box w={200} h={200}>
      Im am a Box
    </Box>
    <Button>Press me</Button>
    </VStack>
    
  )
}
