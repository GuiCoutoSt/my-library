import { Link as RouterDom } from 'react-router-dom';

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
  Heading,
} from '@chakra-ui/react';

import { HomeLink } from './link.home';

import { subjectLinks } from '../../utils/subjectLinks';

export const Home = () => {
  const booksSum = () => {
    let sum = subjectLinks.reduce(
      (previousValue, item) => previousValue + item.data.length,
      0
    );

    return sum;
  };

  let totalOfBooks = booksSum();

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
          <Text fontSize='xl' textAlign='left'>
            Seja bem-vindo ao{' '}
            <Text as='strong' fontStyle='italic'>
              my library
            </Text>
            ! Aqui você tem acesso aos registros dos livros em sua biblioteca.
            Para acessar as intruções de uso vá até a aba{' '}
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
          border='1px solid black'
          borderRadius='5px'
          textAlign='left'
          backgroundColor='white'
          boxShadow='2px 2px 0 0 black'
        >
          <StatLabel fontSize='lg' fontWeight='semibold'>
            total de livros
          </StatLabel>
          <StatNumber>{totalOfBooks}</StatNumber>
          <StatHelpText fontStyle='italic'>
            número de livros cadastrados no sistema
          </StatHelpText>
        </Stat>
        <Box>
          <Heading
            as='h2'
            margin='3rem 0 2rem'
            fontSize='3xl'
            fontWeight='semibold'
            textAlign='center'
            textTransform='lowercase'
          >
            assuntos
          </Heading>
        </Box>

        <Box
          marginBottom='20px'
          borderRadius='5px'
          backgroundColor='#fefae0'
          padding='10px'
          border='1px solid'
          boxShadow='0 2px 0 0'
          fontSize='lg'
          fontStyle='italic'
        >
          <Text>
            Para acessar todos os livros registrados independentemente do
            assunto, clique no botão{' '}
            <Text as='strong'>"Todos os Assuntos"</Text>
          </Text>
        </Box>

        <Flex width='100%' height='100%' margin='20px 0' fontSize='lg'>
          <Link
            as={RouterDom}
            to='/all-subjects'
            width='max-content'
            border='1px solid'
            padding='2px 4px'
            borderRadius='5px'
            color='black'
            _hover={{
              transform: 'translate(-2px, -2px)',
              textDecoration: 'none',
              backgroundColor: 'white',
              boxShadow: '2px 2px 0 0 black',
            }}
          >
            Todos os Assuntos
          </Link>
        </Flex>

        <Box
          borderRadius='5px'
          padding='10px'
          backgroundColor='#fefae0'
          border='1px solid'
          boxShadow='0 2px 0 0'
          fontSize='lg'
          fontStyle='italic'
        >
          <Text>
            Esses são os assuntos que dividem as seções de livros disponíveis em
            sua biblioteca. Para acessar, basta clicar na seção desejada.
          </Text>
        </Box>
        <Flex
          as='nav'
          flexDirection='row'
          flexWrap='wrap'
          gap='10px'
          margin='20px 0'
          fontSize='lg'
        >
          {subjectLinks.map((item, index) => {
            return (
              <HomeLink
                key={index}
                url={`/subject/${item.url}`}
                innerText={item.innerText}
              />
            );
          })}
        </Flex>
      </Box>
    </Flex>
  );
};
