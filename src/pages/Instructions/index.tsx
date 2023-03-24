import { useState } from 'react';

import { Link as RouterDom } from 'react-router-dom';

import F4D7 from '../../assets/images/1F4D7.svg';

import {
  Box,
  Flex,
  Heading,
  Highlight,
  Image,
  Link,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';

import { HomeLink } from '../Home/link.home';
import { Searcher } from '../../components/Searcher';

export const Instructions = () => {
  const [search, setSearch] = useState('title');
  const [query, setQuery] = useState('');

  return (
    <Flex flexDirection='column' justifyContent='center' alignItems='center'>
      <Box width='600px'>
        <Box marginTop='100px' position='relative'>
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
              instruções
            </Text>
            <Image
              src={F4D7}
              draggable='false'
              width='80px'
              height='fit-content'
            />
          </Flex>
          <Text fontSize='xl'>
            Aqui você encontra as instruções necessárias para a utilização do{' '}
            <Text as='strong' fontStyle='italic'>
              my library
            </Text>
            .
          </Text>

          <Box
            as='nav'
            width='fit-content'
            margin='0 auto'
            marginTop='80px'
            padding='20px'
            border='1px solid black'
            borderRadius='5px'
            boxShadow='2px 2px 0 0'
            textTransform='uppercase'
          >
            <Text
              as='h2'
              marginBottom='15px'
              fontSize='lg'
              fontWeight='semibold'
              textAlign='center'
              textTransform='uppercase'
            >
              índice
            </Text>
            <List
              as='ul'
              fontFamily='monospace'
              fontSize='md'
              fontWeight='semibold'
            >
              <ListItem>
                <Link
                  href='#sections'
                  _hover={{ textDecoration: 'underline', color: 'gray.500' }}
                >
                  seções
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href='#registers'
                  _hover={{ textDecoration: 'underline', color: 'gray.500' }}
                >
                  entendendo os registros
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href='#searching'
                  _hover={{ textDecoration: 'underline', color: 'gray.500' }}
                >
                  pesquisando
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href='#fiding'
                  _hover={{ textDecoration: 'underline', color: 'gray.500' }}
                >
                  localizando livros na biblioteca
                </Link>
              </ListItem>
            </List>
          </Box>
        </Box>

        <Box id='sections' padding='80px 0'>
          <Heading
            as='h2'
            margin='3rem 0 1rem'
            fontSize='2xl'
            fontWeight='semibold'
            textTransform='lowercase'
          >
            seções
          </Heading>

          <Box
            padding='10px'
            borderRadius='5px'
            backgroundColor='#fefae0'
            border='1px solid'
            boxShadow='0 2px 0 0'
            fontSize='lg'
          >
            <Text>
              Os livros estão divididos por seções de assunto. Para acessar uma
              seção, basta acessar a{' '}
              <Link
                as={RouterDom}
                to='/'
                fontWeight='bold'
                fontStyle='italic'
                color='blue.500'
                _hover={{ color: 'gray.500' }}
              >
                página inicial
              </Link>{' '}
              e selecionar o assunto desejado, como o mostrado abaixo:
            </Text>
          </Box>
          <Flex
            as='nav'
            flexWrap='wrap'
            justifyContent='center'
            marginTop='20px'
            fontSize='lg'
          >
            <HomeLink
              url='/subject/general-medicine'
              innerText='Medicina Geral'
            />
          </Flex>
        </Box>

        <Box id='registers' padding='3rem 0'>
          <Heading
            as='h2'
            margin='3rem 0 1rem'
            fontSize='2xl'
            fontWeight='semibold'
            textTransform='lowercase'
          >
            entendendo os registros
          </Heading>
          <Box
            marginBottom='20px'
            padding='10px'
            border='1px solid'
            borderRadius='5px'
            boxShadow='0 2px 0 0'
            fontSize='lg'
            backgroundColor='#fefae0'
          >
            <Text>
              Cada registro é composto de campos que descrevem os livros.
              Acompanhe o exemplo de registro abaixo com a explicação de cada
              campo para compreender melhor.
            </Text>
          </Box>

          <Flex
            flexDirection='column'
            justifyContent='space-between'
            border='2px solid'
            borderRadius='10px'
          >
            <Box padding='15px' backgroundColor='white' borderTopRadius='10px'>
              <Text marginBottom='10px' fontSize='xl'>
                <Text as='strong'>
                  {
                    'Cem bilhões de neurônios: Conceitos fundamentais de neurociência'
                  }
                </Text>
              </Text>
              <Box>
                <Text>Autor: {'Roberto Lent'}</Text>
                <Text>Edição: {'-'}</Text>
                <Text>Ano: {'2001'}</Text>
                <Text>Volume: {'-'}</Text>
                <Text>Nota: {'-'}</Text>
                <Text>
                  Assunto(s):{' '}
                  <Text as='span' textTransform='uppercase'>
                    {'Neurônios; Neurociências; Sistema nervoso'}
                  </Text>
                </Text>
              </Box>
            </Box>
            <Flex
              width='100%'
              justifyContent='center'
              alignItems='center'
              gap='10px'
              borderTop='1px solid'
              borderBottomRadius='8px'
              textAlign='center'
              fontFamily='monospace'
              backgroundColor='white'
            >
              <Text fontSize='2xl'>{1}</Text>
              <Text fontSize='xl'>{'MEDICINA GERAL'}</Text>
            </Flex>
          </Flex>
          <Text
            margin='1rem 0'
            fontSize='md'
            fontStyle='italic'
            textAlign='right'
            color='red.500'
          >
            * Exemplo de registro *
          </Text>
          <Flex
            flexDirection='column'
            margin='20px 0'
            padding='1.5rem'
            borderRadius='5px'
            border='1px solid'
            boxShadow='2px 2px 0 0'
            fontSize='md'
            fontFamily='monospace'
          >
            <Box margin='10px 0'>
              <Text
                margin='10px 0'
                fontSize='xl'
                fontWeight='bold'
                textTransform='uppercase'
              >
                <Highlight
                  query='Título'
                  styles={{ px: '2', py: '1', bg: '#fefae0' }}
                >
                  Título
                </Highlight>
              </Text>
              <Text>
                O{' '}
                <Text as='strong' textTransform='uppercase'>
                  título
                </Text>{' '}
                é o primeiro campo mostrado no registro. No exemplo o título é:{' '}
                <Text as='strong' textTransform='uppercase'>
                  Cem bilhões de neurônios: Conceitos fundamentais de
                  neurociência
                </Text>
                .
              </Text>
            </Box>
            <Box margin='10px 0'>
              <Text
                margin='10px 0'
                fontSize='xl'
                fontWeight='bold'
                textTransform='uppercase'
              >
                <Highlight
                  query='Edição'
                  styles={{ px: '2', py: '1', bg: '#fefae0' }}
                >
                  Edição
                </Highlight>
              </Text>
              <Text>
                A{' '}
                <Text as='strong' textTransform='uppercase'>
                  edição
                </Text>{' '}
                é um número que indica a versão do livro. Nesse sistema, a
                edição é registrada quando se tem livros iguais. O livro em
                questão não foi registrado com um número de edição.
              </Text>
            </Box>
            <Box margin='10px 0'>
              <Text
                margin='10px 0'
                fontSize='xl'
                fontWeight='bold'
                textTransform='uppercase'
              >
                <Highlight
                  query='Ano'
                  styles={{ px: '2', py: '1', bg: '#fefae0' }}
                >
                  Ano
                </Highlight>
              </Text>
              <Text>
                O{' '}
                <Text as='strong' textTransform='uppercase'>
                  {' '}
                  ano
                </Text>{' '}
                consiste no ano no qual o livro foi publicado. Nesse exemplo, o
                livro foi publicado em:{' '}
                <Text as='strong' textTransform='uppercase'>
                  2001
                </Text>
                .
              </Text>
            </Box>
            <Box margin='10px 0'>
              <Text
                margin='10px 0'
                fontSize='xl'
                fontWeight='bold'
                textTransform='uppercase'
              >
                <Highlight
                  query='Volume'
                  styles={{ px: '2', py: '1', bg: '#fefae0' }}
                >
                  Volume
                </Highlight>
              </Text>
              <Text>
                O{' '}
                <Text as='strong' textTransform='uppercase'>
                  volume
                </Text>{' '}
                é um registro utilizado quando um livro faz parte de uma coleção
                ou compilação, dividida em mais de um volume. O exemplo
                utilizado não possuí outros volumes.
              </Text>
            </Box>
            <Box margin='10px 0'>
              <Text
                margin='10px 0'
                fontSize='xl'
                fontWeight='bold'
                textTransform='uppercase'
              >
                <Highlight
                  query='Nota'
                  styles={{ px: '2', py: '1', bg: '#fefae0' }}
                >
                  Nota
                </Highlight>
              </Text>
              <Text>
                A{' '}
                <Text as='strong' textTransform='uppercase'>
                  nota
                </Text>{' '}
                é um dado complementar de um livro. Um exemplo de nota: se o
                livro possuí uma dedicatória.
              </Text>
            </Box>
            <Box margin='10px 0'>
              <Text
                margin='10px 0'
                fontSize='xl'
                fontWeight='bold'
                textTransform='uppercase'
              >
                <Highlight
                  query='Assunto'
                  styles={{ px: '2', py: '1', bg: '#fefae0' }}
                >
                  Assunto
                </Highlight>
              </Text>
              <Text>
                O{' '}
                <Text as='strong' textTransform='uppercase'>
                  assunto
                </Text>{' '}
                consiste em palavras que descrevem qualitativamente o livro. No
                exemplo em questão, os assuntos são:
              </Text>
              <List marginTop='10px' fontWeight='bold' textAlign='center'>
                <ListItem>NEURÔNIOS</ListItem>
                <ListItem>NEUROCIÊNCIAS</ListItem>
                <ListItem>SISTEMA NERVOSO</ListItem>
              </List>
            </Box>
            <Box margin='10px 0'>
              <Text
                margin='10px 0'
                fontSize='xl'
                fontWeight='bold'
                textTransform='uppercase'
              >
                <Highlight
                  query='Numeração'
                  styles={{ px: '2', py: '1', bg: '#fefae0' }}
                >
                  Numeração
                </Highlight>
              </Text>
              <Text>
                A{' '}
                <Text as='strong' textTransform='uppercase'>
                  numeração
                </Text>{' '}
                indica a localização física do livro na biblioteca, além de
                representar um registro único dentro de cada seção. Nesse
                exemplo, a numeração é: <Text as='strong'>1</Text>.
              </Text>
            </Box>
          </Flex>
        </Box>

        <Box id='searching' padding='80px 0'>
          <Heading
            as='h2'
            width='fit-content'
            margin='3rem 0 1rem'
            fontSize='2xl'
            fontWeight='semibold'
            textTransform='lowercase'
          >
            pesquisando
          </Heading>

          <Box
            marginBottom='20px'
            padding='10px'
            border='1px solid'
            borderRadius='5px'
            boxShadow='0 2px 0 0'
            fontSize='lg'
            backgroundColor='#fefae0'
          >
            <Text>
              Ao ser redirecionado para a seção escolhida, serão exibidos todos
              os livros cadastrados, dentro do assunto escolhido. Para filtrar a
              pesquisa, basta escrever o termo a ser pesquisado e os resultados
              aparecem automaticamente.
            </Text>
          </Box>
          <Box
            marginBottom='20px'
            padding='10px'
            border='1px solid'
            borderRadius='5px'
            boxShadow='0 2px 0 0'
            fontSize='lg'
            backgroundColor='#fefae0'
          >
            <Text>
              Existe a possibilidade de se utilizar três filtros de pesquisa
              nesse sistema:{' '}
              <Text
                as='span'
                padding='2px'
                border='1px solid'
                boxShadow='1px 1px 0 0'
                borderRadius='5px'
                fontFamily='monospace'
                backgroundColor='white'
              >
                Título
              </Text>{' '}
              -{' '}
              <Text
                as='span'
                padding='2px'
                border='1px solid'
                boxShadow='1px 1px 0 0'
                borderRadius='5px'
                fontFamily='monospace'
                backgroundColor='white'
              >
                Autor
              </Text>{' '}
              -{' '}
              <Text
                as='span'
                padding='2px'
                border='1px solid'
                boxShadow='1px 1px 0 0'
                borderRadius='5px'
                fontFamily='monospace'
                backgroundColor='white'
              >
                Assunto
              </Text>
            </Text>
          </Box>

          <Box
            marginBottom='20px'
            padding='10px'
            border='1px solid'
            borderRadius='5px'
            boxShadow='0 2px 0 0'
            fontSize='lg'
            backgroundColor='#fefae0'
          >
            <Text fontWeight='bold' textTransform='uppercase' color='red.500'>
              atenção
            </Text>
            <Text>
              O buscador não faz diferenciação entre letras maiúsculas e
              minúsculas, porém a ortografia deve ser inserida corretamente a
              fim de retornar os resultados (incluindo acentuação das palavras).
            </Text>
          </Box>

          <Searcher
            search={search}
            setSearch={setSearch}
            query={query}
            setQuery={setQuery}
          />
          <Text
            margin='1rem 0'
            fontSize='md'
            fontStyle='italic'
            textAlign='right'
            color='red.500'
          >
            * Buscador meramente ilustrativo! *
          </Text>
        </Box>

        <Box id='fiding' padding='80px 0'>
          <Heading
            as='h2'
            width='fit-content'
            margin='3rem 0 1rem'
            fontSize='2xl'
            fontWeight='semibold'
            textTransform='lowercase'
          >
            localizando livros na biblioteca
          </Heading>

          <Box
            marginBottom='20px'
            padding='10px'
            border='1px solid'
            borderRadius='5px'
            boxShadow='0 2px 0 0'
            fontSize='lg'
            backgroundColor='#fefae0'
          >
            <Text>
              Ao encontrar o livro desejado nos registros, o próximo passo é
              localizá-lo na biblioteca.
            </Text>
          </Box>
          <Box
            marginBottom='20px'
            padding='10px'
            border='1px solid'
            borderRadius='5px'
            boxShadow='0 2px 0 0'
            fontSize='lg'
            backgroundColor='#fefae0'
          >
            <Text>
              O que determina a localização física dos livros são duas
              informações, encontradas nas etiquetas de cada livro: a numeração
              e o nome da seção. Os livros de cada seção estarão juntos e
              ordenados pela sua numeração.
            </Text>
          </Box>
          <Box
            marginBottom='20px'
            padding='10px'
            border='1px solid'
            borderRadius='5px'
            boxShadow='0 2px 0 0'
            fontSize='lg'
            backgroundColor='#fefae0'
          >
            <Text>
              De acordo com o exemplo de registro mostrado acima, a etiqueta é
              similar a essa:
            </Text>
          </Box>

          <Flex justifyContent='center' fontFamily='monospace' fontSize='xl'>
            <Box
              width='300px'
              padding='20px'
              border='1px solid'
              borderRadius='5px'
              textAlign='center'
            >
              <Text marginBottom='2px'>1</Text>
              <Text>MEDICINA GERAL</Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};
