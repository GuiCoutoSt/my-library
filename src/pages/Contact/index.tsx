import { Box, Flex, Image, Link, Text } from '@chakra-ui/react';

import { CopyButton } from './copyButton.contact';

import F4D8 from '../../assets/images/1F4D8.svg';

export const Contact = () => {
  return (
    <Flex flexDirection='column' justifyContent='center' alignItems='center'>
      <Box width='500px'>
        <Box marginTop='100px' textAlign='center' position='relative'>
          <Flex alignContent='center' justifyContent='center' margin='15px'>
            <Text
              as='h1'
              height='fit-content'
              marginRight='5px'
              fontSize='5xl'
              fontWeight='semibold'
              fontStyle='italic'
              textAlign='center'
            >
              contato
            </Text>
            <Image
              src={F4D8}
              draggable='false'
              width='80px'
              height='fit-content'
            />
          </Flex>
          <Text fontSize='xl'>
            Para tirar dúvidas ou receber mais esclarecimentos sobre o
            funcionamento do{' '}
            <Text as='strong' fontStyle='italic'>
              my-library
            </Text>{' '}
            entre em contato conosco através dos canais:
          </Text>

          <Flex
            flexDirection='column'
            margin='80px 0 20px 0'
            position='relative'
            padding='20px'
            border='1px solid'
            borderColor='gray.200'
            borderRadius='5px'
            textAlign='left'
          >
            <Text fontSize='xl' fontWeight='semibold'>
              WhatsApp
            </Text>
            <Text id='wpp-copy'>(61) 98234-2442</Text>
            <CopyButton elementId='wpp-copy' />

            <Link
              href='https://wa.me/5561982342442'
              target='_blank'
              marginTop='10px'
              display='block'
              fontSize='sm'
              fontStyle='italic'
              color='blue.500'
            >
              Clique aqui para abrir o <Text as='strong'>WhatsApp</Text>
            </Link>
          </Flex>
          <Flex
            flexDirection='column'
            position='relative'
            padding='20px'
            border='1px solid'
            borderColor='gray.200'
            borderRadius='5px'
            textAlign='left'
          >
            <Text fontSize='xl' fontWeight='semibold'>
              Email
            </Text>
            <Text id='email-copy'>gcoutos95@gmail.com</Text>
            <CopyButton elementId='email-copy' />
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};
