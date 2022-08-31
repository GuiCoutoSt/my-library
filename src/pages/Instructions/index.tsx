import { useState } from 'react';

import { Link as RouterDom } from 'react-router-dom';

import F4D7 from '../../assets/images/1F4D7.svg';

import {
  Box,
  Flex,
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
            <Text as='strong'>my library</Text>.
          </Text>
        </Box>

        <Box margin='80px 0'>
          <Text
            width='fit-content'
            margin='30px 0 10px 0'
            fontSize='2xl'
            fontWeight='semibold'
            fontStyle='italic'
            textTransform='lowercase'
          >
            <Highlight
              query='seções'
              styles={{ px: '2', py: '1', bg: 'orange.100' }}
            >
              seções
            </Highlight>
          </Text>

          <Box
            padding='10px'
            borderRadius='5px'
            backgroundColor='gray.100'
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

        <Box margin='80px 0'>
          <Text
            width='fit-content'
            margin='30px 0 10px 0'
            fontSize='2xl'
            fontWeight='semibold'
            fontStyle='italic'
            textTransform='lowercase'
          >
            <Highlight
              query='entendendo os registros'
              styles={{ px: '2', py: '1', bg: 'orange.100' }}
            >
              entendendo os registros
            </Highlight>
          </Text>
          <Box
            marginBottom='20px'
            padding='10px'
            borderRadius='5px'
            backgroundColor='gray.100'
            fontSize='lg'
          >
            <Text>
              Cada registro é composto de campos que descrevem os livros.
              Acompanhe o exemplo de registro abaixo com a explicação de cada
              campo para compreender melhor.
            </Text>
          </Box>
          <Text
            marginTop='10px'
            fontSize='md'
            fontStyle='italic'
            color='red.500'
          >
            * Exemplo de registro *
          </Text>
          <Flex
            flexDirection='column'
            justifyContent='space-between'
            border='1px solid #444'
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
              <Box fontSize='large'>
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
            <Box
              width='100%'
              padding='10px 0'
              borderBottomRadius='8px'
              textAlign='center'
              backgroundColor='blue.400'
              color='white'
              fontWeight='bold'
            >
              <Text fontSize='3xl'>{1}</Text>
              <Text fontSize='xl'>{'MEDICINA GERAL'}</Text>
            </Box>
          </Flex>
          <Flex
            flexDirection='column'
            margin='20px 0'
            padding='10px'
            borderRadius='5px'
            backgroundColor='gray.100'
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
                  styles={{ px: '2', py: '1', bg: 'orange.200' }}
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
                  styles={{ px: '2', py: '1', bg: 'orange.200' }}
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
                  styles={{ px: '2', py: '1', bg: 'orange.200' }}
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
                  styles={{ px: '2', py: '1', bg: 'orange.200' }}
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
                  styles={{ px: '2', py: '1', bg: 'orange.200' }}
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
                  styles={{ px: '2', py: '1', bg: 'orange.200' }}
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
                  styles={{ px: '2', py: '1', bg: 'orange.200' }}
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

        <Box margin='80px 0'>
          <Text
            width='fit-content'
            margin='30px 0 10px 0'
            fontSize='2xl'
            fontWeight='semibold'
            fontStyle='italic'
            textTransform='lowercase'
          >
            <Highlight
              query='pesquisando'
              styles={{ px: '2', py: '1', bg: 'orange.100' }}
            >
              pesquisando
            </Highlight>
          </Text>

          <Box
            marginBottom='20px'
            padding='10px'
            borderRadius='5px'
            backgroundColor='gray.100'
            fontSize='lg'
          >
            <Text>
              Ao ser redirecionado para a seção escolhida, serão exibidos todos
              os livros disponíveis dentro do assunto escolhido. Para filtrar a
              pesquisa, basta escrever o termo a ser pesquisado e os resultados
              aparecem automaticamente.
            </Text>
          </Box>
          <Box
            marginBottom='20px'
            padding='10px'
            borderRadius='5px'
            backgroundColor='gray.100'
            fontSize='lg'
          >
            <Text>
              Existe a possibilidade de se utilizar três filtros de pesquisa
              nesse sistema:{' '}
              <Text
                as='strong'
                padding='2px'
                borderRadius='5px'
                textTransform='uppercase'
                backgroundColor='blue.400'
                color='white'
              >
                Título
              </Text>
              ,{' '}
              <Text
                as='strong'
                padding='2px'
                borderRadius='5px'
                textTransform='uppercase'
                backgroundColor='blue.400'
                color='white'
              >
                Autor
              </Text>{' '}
              e{' '}
              <Text
                as='strong'
                padding='2px'
                borderRadius='5px'
                textTransform='uppercase'
                backgroundColor='blue.400'
                color='white'
              >
                Assunto
              </Text>
              .
            </Text>
          </Box>

          <Box
            marginBottom='20px'
            padding='10px'
            borderRadius='5px'
            backgroundColor='gray.100'
            fontSize='lg'
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
          <Text
            marginTop='10px'
            fontSize='md'
            fontStyle='italic'
            color='red.500'
          >
            * Buscador meramente ilustrativo! *
          </Text>
          <Searcher
            search={search}
            setSearch={setSearch}
            query={query}
            setQuery={setQuery}
          />
        </Box>

        <Box margin='80px 0'>
          <Text
            width='fit-content'
            margin='30px 0 10px 0'
            fontSize='2xl'
            fontWeight='semibold'
            fontStyle='italic'
            textTransform='lowercase'
          >
            <Highlight
              query='localizando livros na biblioteca'
              styles={{ px: '2', py: '1', bg: 'orange.100' }}
            >
              localizando livros na biblioteca
            </Highlight>
          </Text>

          <Box
            margin='20px 0'
            padding='10px'
            borderRadius='5px'
            backgroundColor='gray.100'
            fontSize='lg'
          >
            <Text>
              Ao encontrar o livro desejado nos registros, o próximo passo é
              localizá-lo na biblioteca.
            </Text>
          </Box>
          <Box
            margin='20px 0'
            padding='10px'
            borderRadius='5px'
            backgroundColor='gray.100'
            fontSize='lg'
          >
            <Text>
              O que determina a localização física dos livros são duas
              informações, encontradas nas etiquetas de cada livro: a numeração
              e o nome da seção. Os livros de cada seção estarão juntos e
              ordenados pela sua numeração.
            </Text>
          </Box>
          <Box
            margin='20px 0'
            padding='10px'
            borderRadius='5px'
            backgroundColor='gray.100'
            fontSize='lg'
          >
            <Text>
              De acordo com o exemplo de registro mostrado acima, a etiqueta é
              similar a essa:
            </Text>
          </Box>

          <Flex justifyContent='center' fontFamily='monospace' fontSize='xl'>
            <Box
              padding='20px'
              border='1px solid'
              borderColor='gray.200'
              borderRadius='10px'
              textAlign='center'
            >
              <Text marginBottom='5px'>0001</Text>
              <Text>MEDICINA GERAL</Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};
