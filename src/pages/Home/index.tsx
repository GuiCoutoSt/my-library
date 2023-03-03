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
  Highlight,
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
          border='1px solid'
          borderColor='gray.200'
          borderRadius='5px'
          textAlign='left'
          backgroundColor='white'
        >
          <StatLabel fontSize='lg' fontWeight='semibold'>
            Total de Livros
          </StatLabel>
          <StatNumber>{totalOfBooks}</StatNumber>
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
          marginBottom='20px'
          borderRadius='5px'
          backgroundColor='gray.100'
          padding='10px'
          fontSize='lg'
          fontStyle='italic'
        >
          <Text>
            Para acessar todos os livros registrados independentemente do
            assunto, clique no botão{' '}
            <Text as='strong'>"Todos os Assuntos"</Text>
          </Text>
        </Box>

        <Flex
          width='100%'
          height='100%'
          justifyContent='center'
          margin='20px 0'
        >
          <Link
            as={RouterDom}
            to='/all-subjects'
            border='1px solid transparent'
            padding='2px 4px'
            borderRadius='5px'
            fontSize='xl'
            textAlign='center'
            backgroundColor='orange.300'
            color='orange.700'
            _hover={{
              transform: 'translateY(-3px)',
              borderColor: 'orange.300',
              textDecoration: 'none',
              backgroundColor: 'white',
              color: 'orange.700',
            }}
          >
            Todos os Assuntos
          </Link>
        </Flex>

        <Box
          borderRadius='5px'
          backgroundColor='gray.100'
          padding='10px'
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
          justifyContent='center'
          gap='10px'
          margin='20px 0'
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
