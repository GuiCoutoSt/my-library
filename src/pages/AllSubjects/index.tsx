import { useState } from 'react';

import {
  Box,
  Flex,
  Heading,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from '@chakra-ui/react';

import { SpecialSearcher } from '../../components/SpecialSearcher';

// data 💾
import { all_data } from '../../data/.all-data';

// types
import { BookData } from '../../types/types';
import { defineSearchType } from '../../utils/defineSearchType';

type BookDataArray = Array<BookData>;

export const AllSubjects = () => {
  const [search, setSearch] = useState('title');
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<BookDataArray>([]);

  return (
    <Flex flexDirection='column' justifyContent='center'>
      <Box padding='20px 0' textAlign='center'>
        <Heading as='h1' fontSize='5xl'>
          Todos os Assuntos
        </Heading>

        <Stat
          margin='30px auto'
          padding='1rem'
          border='1px solid'
          boxShadow='1px 1px 0 0'
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
      </Box>
      <SpecialSearcher
        search={search}
        setSearch={setSearch}
        query={query}
        setQuery={setQuery}
        setResults={setResults}
      />

      <Flex
        marginTop='1rem'
        padding='1rem 2rem 2rem 0'
        width='650px'
        height='700px'
        border='1px 0 0 0 solid'
        flexDirection='column'
        gap='16px'
        scrollBehavior='smooth'
        overflowY='scroll'
      >
        {results.length > 0 ? (
          results.map((item, index) => {
            return (
              <Flex
                key={index}
                flexDirection='column'
                justifyContent='space-between'
                border='2px solid'
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
                  <Box>
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
                  <Text fontSize='2xl'>{item.number}</Text>
                  <Text fontSize='xl' textTransform='uppercase'>
                    {item.general_subject}
                  </Text>
                </Flex>
              </Flex>
            );
          })
        ) : (
          <Flex justifyContent='center' margin='2rem 0'>
            <Box
              padding='1rem'
              border=' 1px solid black'
              borderRadius='5px'
              boxShadow='2px 2px 0 0'
              textAlign='center'
              fontFamily='monospace'
              fontSize='md'
            >
              <Text marginBottom='1rem'>Nenhum livro foi encontrado :/</Text>
              <Text>
                Digite um{' '}
                <Text
                  as='span'
                  padding='2px'
                  border='1px solid'
                  borderColor='gray.300'
                  borderRadius='5px'
                  textTransform='lowercase'
                  backgroundColor='gray.200'
                >
                  {defineSearchType(search)}
                </Text>{' '}
                e clique em{' '}
                <Text
                  as='span'
                  padding='2px'
                  border='1px solid'
                  borderColor='green.400'
                  borderRadius='5px'
                  fontWeight='semibold'
                  backgroundColor='green.300'
                  color='white'
                >
                  Buscar
                </Text>
              </Text>
            </Box>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};
