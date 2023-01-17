import { useState } from 'react';

import {
  Box,
  Flex,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from '@chakra-ui/react';

import { Searcher } from '../../components/Searcher';

type BookData = {
  number: string;
  title: string;
  author: string;
  edition: string;
  volume: string;
  publication_date: string;
  subject: string;
  note: string;
};

interface ISubjaectProps {
  sectionName: string;
  data: BookData[];
}

export const SectionPage = ({ sectionName, data }: ISubjaectProps) => {
  const [search, setSearch] = useState('title');
  const [query, setQuery] = useState('');

  return (
    <Flex flexDirection='column' justifyContent='center'>
      <Box padding='20px 0' textAlign='center'>
        <Text
          as='h1'
          fontSize='5xl'
          fontWeight='bold'
          textTransform='uppercase'
          color='blue.300'
        >
          {sectionName}
        </Text>
        <Text fontSize='lg' fontStyle='italic'>
          Aqui estão todos os livros relacionados à{' '}
          <Text as='strong' textTransform='uppercase' color='blue.300'>
            {sectionName}
          </Text>
          .
        </Text>
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
          <StatNumber>{data.length}</StatNumber>
          <StatHelpText fontStyle='italic'>
            Número de livros cadastrados nesse assunto
          </StatHelpText>
        </Stat>
        <Flex flexDirection='column' alignItems='center'>
          <Text
            marginBottom='10px'
            fontSize='md'
            fontStyle='italic'
            color='red.500'
          >
            * Exemplo de etiqueta *{' '}
          </Text>
          <Box
            width='300px'
            padding='20px'
            border='1px solid'
            borderColor='gray.200'
            borderRadius='10px'
            fontFamily='monospace'
            fontSize='xl'
            textAlign='center'
          >
            <Text marginBottom='2px'>1</Text>
            <Text>{sectionName}</Text>
          </Box>
        </Flex>
      </Box>
      <Searcher
        search={search}
        setSearch={setSearch}
        query={query}
        setQuery={setQuery}
      />
      <Flex justifyContent='center'>
        <Box
          width='650px'
          height='700px'
          scrollBehavior='smooth'
          overflowY='scroll'
          __css={{
            '&::-webkit-scrollbar': {
              width: '10px',
            },

            '&::-webkit-scrollbar-track': {
              background: 'gray.100',
            },

            '&::-webkit-scrollbar-thumb': {
              borderRadius: '5px',
              background: 'gray.300',
            },

            '&::-webkit-scrollbar-thumb:hover': {
              cursor: 'pointer',
              background: 'gray.500',
            },
          }}
        >
          {data
            // eslint-disable-next-line array-callback-return
            .filter((item) => {
              if (!query) {
                return true;
              }

              if (search === 'title') {
                if (
                  item.title.toLowerCase().includes(query.toLocaleLowerCase())
                ) {
                  return true;
                }
              }

              if (search === 'author') {
                if (
                  item.author.toLowerCase().includes(query.toLocaleLowerCase())
                ) {
                  return true;
                }
              }

              if (search === 'subject') {
                if (
                  item.subject.toLowerCase().includes(query.toLocaleLowerCase())
                ) {
                  return true;
                }
              }
            })
            .map((item, index) => {
              return (
                <Flex
                  key={index}
                  flexDirection='column'
                  margin='20px'
                  justifyContent='space-between'
                  border='1px solid #444'
                  borderRadius='10px'
                >
                  <Box
                    padding='15px'
                    backgroundColor='white'
                    borderTopRadius='10px'
                  >
                    <Text marginBottom='10px' fontSize='xl'>
                      <Text as='strong'>{item.title}</Text>
                    </Text>
                    <Box fontSize='large'>
                      <Text>Autor: {item.author}</Text>
                      <Text>Edição: {item.edition}</Text>
                      <Text>Ano: {item.publication_date}</Text>
                      <Text>Volume: {item.volume}</Text>
                      <Text>Nota: {item.note}</Text>
                      <Text>
                        Assunto(s):{' '}
                        <Text as='span' textTransform='uppercase'>
                          {item.subject}
                        </Text>
                      </Text>
                    </Box>
                  </Box>
                  <Box
                    width='100%'
                    padding='10px 0'
                    borderBottomRadius='8px'
                    textAlign='center'
                    backgroundColor='blue.300'
                    color='white'
                    fontWeight='bold'
                  >
                    <Text fontSize='3xl'>{item.number}</Text>
                    <Text fontSize='xl' textTransform='uppercase'>
                      {sectionName}
                    </Text>
                  </Box>
                </Flex>
              );
            })}
        </Box>
      </Flex>
    </Flex>
  );
};
