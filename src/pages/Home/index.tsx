import { Link as RouterDom } from 'react-router-dom';

import { sectionsLink } from '../../data/sectionsLink';

import book from '../../assets/images/book.svg';

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
} from '@chakra-ui/react';

import { medicine } from '../../data/medicina';
import { HomeLink } from './link.home';

export const Home = () => {
  return (
    <Flex flexDirection='column' justifyContent='center' alignItems='center'>
      <Stat
        width='fit-content'
        position='absolute'
        bottom='0'
        left='50%'
        transform='translateX(-50%)'
        margin='30px auto'
        padding='10px'
        border='1px solid'
        borderColor='gray.200'
        borderRadius='5px'
        textAlign='left'
        backgroundColor='white'
      >
        <StatLabel>Total de Livros</StatLabel>
        <StatNumber>{medicine.length}</StatNumber>
        <StatHelpText fontStyle='italic'>
          Número de livros cadastrados
        </StatHelpText>
      </Stat>
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
            <Image src={book} width='80px' height='fit-content' />
          </Flex>
          <Text fontSize='xl'>
            Seja bem-vindo ao <Text as='strong'>my library</Text>! Aqui você tem
            acesso aos livros de sua biblioteca. Para acessar as intruções de
            uso vá até a aba{' '}
            <Link
              as={RouterDom}
              to='/instructions'
              fontWeight='bold'
              color='blue.500'
            >
              instruções
            </Link>
            . Caso tenha alguma dúvida,{' '}
            <Link
              as={RouterDom}
              to='/contact'
              fontWeight='bold'
              color='blue.500'
            >
              entre em contato
            </Link>
            . Tenha uma boa leitura!
          </Text>
        </Box>
        <Box>
          <Text
            width='fit-content'
            margin='30px 0 10px 0'
            fontSize='3xl'
            fontWeight='semibold'
            fontStyle='italic'
            textTransform='lowercase'
            textDecoration='underline'
          >
            assuntos
          </Text>
        </Box>
        <Box borderBottomRadius='5px' backgroundColor='gray.100'>
          <Box padding='10px' fontSize='lg'>
            <Text fontSize='lg' fontStyle='italic'>
              Esses são os assuntos que dividem as seções de livros disponíveis
              em sua biblioteca. Para acessar, basta clicar na seção desejada.
            </Text>
          </Box>
          {/* Aqui é possível criar uma renderização mais inteligente  */}
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
