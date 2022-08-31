import { Link as RouterDom } from 'react-router-dom';

import { sectionsLink } from '../../data/sectionsLink';

import F4D5 from '../../assets/images/1F4D5.svg';

import {
  Box,
  Flex,
  Link,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Text,
  Image,
  Highlight,
} from '@chakra-ui/react';

import { general_medicine } from '../../data/medicine';
import { nutrition } from '../../data/nutrition';

import { HomeLink } from './link.home';

export const Home = () => {
  let booksLength = general_medicine.length + nutrition.length;

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
              my library
            </Text>
            <Image
              src={F4D5}
              draggable='false'
              width='80px'
              height='fit-content'
            />
          </Flex>
          <Text fontSize='xl'>
            Seja bem-vindo ao <Text as='strong'>my library</Text>! Aqui você tem
            acesso aos livros de sua biblioteca. Para acessar as intruções de
            uso vá até a aba{' '}
            <Link
              as={RouterDom}
              to='/instructions'
              fontWeight='bold'
              fontStyle='italic'
              color='blue.500'
              _hover={{ color: 'gray.500' }}
            >
              instruções
            </Link>
            . Caso tenha alguma dúvida,{' '}
            <Link
              as={RouterDom}
              to='/contact'
              fontWeight='bold'
              fontStyle='italic'
              color='blue.500'
              _hover={{ color: 'gray.500' }}
            >
              entre em contato
            </Link>
            . Tenha uma boa leitura!
          </Text>
        </Box>
        <Stat
          margin='30px auto'
          padding='10px'
          border='1px solid'
          borderColor='gray.200'
          borderRadius='5px'
          textAlign='left'
          backgroundColor='white'
        >
          <StatLabel fontSize='lg' fontWeight='semibold'>
            Total de Livros
          </StatLabel>
          <StatNumber>{booksLength}</StatNumber>
          <StatHelpText fontStyle='italic'>
            Número de livros cadastrados no sistema
          </StatHelpText>
        </Stat>
        <Box>
          <Text
            as='h2'
            width='fit-content'
            margin='30px 0 10px 0'
            fontSize='3xl'
            fontWeight='semibold'
            fontStyle='italic'
            textTransform='lowercase'
          >
            <Highlight
              query='assuntos'
              styles={{ px: '2', py: '1', bg: 'orange.100' }}
            >
              assuntos
            </Highlight>
          </Text>
        </Box>

        <Box
          borderRadius='5px'
          backgroundColor='gray.100'
          padding='10px'
          fontSize='lg'
        >
          <Text fontSize='lg' fontStyle='italic'>
            Esses são os assuntos que dividem as seções de livros disponíveis em
            sua biblioteca. Para acessar, basta clicar na seção desejada.
          </Text>
        </Box>
        <Flex
          as='nav'
          flexWrap='wrap'
          justifyContent='center'
          marginTop='20px'
          fontSize='lg'
        >
          {sectionsLink.map((item, index) => {
            return (
              <HomeLink key={index} url={item.url} innerText={item.innerText} />
            );
          })}
        </Flex>
      </Box>
    </Flex>
  );
};
