import F4D5 from '../../assets/images/1F4D5.svg';

import { Box, Flex, Image, Text } from '@chakra-ui/react';

import { HeaderLink } from './link.header';

export const Header = () => {
  return (
    <Flex
      width='100%'
      as='header'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      position='sticky'
      top='0'
      zIndex='10'
      fontSize='xl'
      fontWeight='light'
      color='blue.500'
    >
      <Box
        width='100%'
        height='40px'
        bgGradient='linear(to-r, green.100, blue.100)'
      ></Box>
      <Flex
        width='100%'
        maxWidth='1024px'
        justifyContent='space-around'
        padding='10px 0'
        backgroundColor='white'
      >
        <Flex alignContent='center'>
          <Text
            height='fit-content'
            marginRight='5px'
            fontStyle='italic'
            textAlign='center'
          >
            my library
          </Text>
          <Image
            src={F4D5}
            draggable='false'
            width='30px'
            height='fit-content'
          />
        </Flex>
        <HeaderLink url='/' innerText='home' />
        <HeaderLink url='/instructions' innerText='instruções' />
        <HeaderLink url='/contact' innerText='contato' />
      </Flex>
    </Flex>
  );
};
