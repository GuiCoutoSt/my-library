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

// data 💾
import { all_data } from '../../data/.all-data';

export const AllSubjects = () => {
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
          textStyle='italic'
          color='orange.300'
        >
          Todos os Assuntos
        </Text>
        <Text fontSize='lg' fontStyle='italic'>
          Aqui estão todos os livros registrados na sua biblioteca.
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
          <StatNumber>{all_data.length}</StatNumber>
          <StatHelpText fontStyle='italic'>
            Número de livros cadastrados
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
            <Text>Arquitetura</Text>
          </Box>
        </Flex>
      </Box>
      <Searcher
        search={search}
        setSearch={setSearch}
        query={query}
        setQuery={setQuery}
        textColor='orange.300'
      />
      <Flex justifyContent='center'>
        <Box
          width='650px'
          height='700px'
          scrollBehavior='smooth'
          overflowY='scroll'
        >
          {all_data
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
                    backgroundColor='orange.300'
                    color='white'
                    fontWeight='bold'
                  >
                    <Text fontSize='3xl'>{item.number}</Text>
                    <Text fontSize='xl' textTransform='uppercase'>
                      {item.general_subject}
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
