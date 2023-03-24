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

import { Searcher } from '../../components/Searcher';

//types
import { BookData } from '../../types/types';

interface IPagePerSubject {
  sectionName: string;
  data: BookData[];
}

export const PagePerSubject = ({ sectionName, data }: IPagePerSubject) => {
  const [search, setSearch] = useState('title');
  const [query, setQuery] = useState('');

  return (
    <Flex flexDirection='column' justifyContent='center'>
      <Box padding='20px 0' textAlign='center'>
        <Heading as='h1' fontSize='5xl'>
          {sectionName}
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
          <StatNumber>{data.length}</StatNumber>
          <StatHelpText fontStyle='italic'>
            Número de livros cadastrados nesse assunto
          </StatHelpText>
        </Stat>
      </Box>

      <Searcher
        search={search}
        setSearch={setSearch}
        query={query}
        setQuery={setQuery}
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
                  <Box fontSize='md'>
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
                    {sectionName}
                  </Text>
                </Flex>
              </Flex>
            );
          })}
      </Flex>
    </Flex>
  );
};
