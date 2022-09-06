import { Link as RouterDom } from 'react-router-dom';

import { useState } from 'react';

import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';

import { CopyIcon } from '@chakra-ui/icons';

import F4D8 from '../../assets/images/1F4D8.svg';

export const Contact = () => {
  const [copyButton, setCopyButton] = useState('copiar');

  const copyText = (elementId: string) => {
    const text = document.getElementById(elementId)?.innerText;

    setCopyButton('copiado');

    setTimeout(() => {
      setCopyButton('copiar');
    }, 2000);
  };

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
          <Flex justifyContent='center' marginTop='80px'>
            <List>
              <ListItem
                padding='20px'
                border='1px solid'
                borderColor='gray.200'
                borderRadius='5px'
              >
                <Text fontWeight='semibold'>WhatsApp</Text>
                <Link id='wpp-copy' href='https://wa.me' display='block'>
                  (61) 98234-2442
                </Link>
                <Button
                  onClick={() => copyText('wpp-copy')}
                  textTransform='uppercase'
                >
                  <CopyIcon /> {copyButton}
                </Button>
              </ListItem>
              <ListItem
                padding='20px'
                border='1px solid'
                borderColor='gray.200'
                borderRadius='5px'
              >
                <Text fontWeight='semibold'>Email</Text>
                <Link>gcoutos95@gmail.com</Link>
              </ListItem>
            </List>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};
