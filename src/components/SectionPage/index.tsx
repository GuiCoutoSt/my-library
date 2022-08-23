import React, { useState } from 'react';

import { Link as RouterDom } from 'react-router-dom';

import {
  Box,
  Flex,
  Input,
  Select,
  Stat,
  StatLabel,
  StatNumber,
  Text,
} from '@chakra-ui/react';

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
  sessionName: string;
  data: BookData[];
}

export const SectionPage = ({ sessionName, data }: ISubjaectProps) => {
  const [search, setSearch] = useState('title');
  const [query, setQuery] = useState('');

  const changeSearch = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearch(e.target.value);
  };

  const defineSearchType = (str: string) => {
    if (str === 'title') {
      return 'Título';
    } else if (str === 'author') {
      return 'Autor';
    } else {
      return 'Assunto';
    }
  };

  return (
    <Flex flexDirection='column' justifyContent='center'>
      <Box padding='20px' textAlign='center'>
        <Text
          as='h1'
          fontSize='5xl'
          fontWeight='bold'
          textTransform='uppercase'
          color='blue.500'
        >
          {sessionName}
        </Text>
        <Text fontSize='lg' fontStyle='italic'>
          Aqui estão todos os livros relacionados à{' '}
          <Text as='strong' textTransform='uppercase' color='blue.500'>
            {sessionName}
          </Text>
          .
        </Text>
        <Stat
          width='fit-content'
          margin='20px auto'
          padding='10px'
          border='1px solid'
          borderColor='gray.200'
          borderRadius='5px'
          textAlign='left'
          backgroundColor='white'
        >
          <StatLabel>Total de livros na seção</StatLabel>
          <StatNumber>{data.length}</StatNumber>
        </Stat>
      </Box>
      <Flex
        width='100%'
        justifyContent='space-between'
        alignItems='flex-end'
        padding='20px'
        backgroundColor='gray.50'
      >
        <Box flexGrow='1'>
          <Text marginBottom='10px'>
            Pesquisando por{' '}
            <Text
              as='strong'
              padding='2px'
              borderRadius='5px'
              fontSize='lg'
              textTransform='uppercase'
              backgroundColor='blue.400'
              color='white'
            >
              {defineSearchType(search)}
            </Text>
          </Text>
          <Input
            placeholder={`Digite um ${defineSearchType(search)}...`}
            className={'input'}
            onChange={(event) => setQuery(event.target.value)}
            value={query}
            flexGrow='1'
            borderRightRadius='none'
            backgroundColor='white'
          />
        </Box>
        <Box>
          <Select
            value={search}
            onChange={changeSearch}
            borderLeftRadius='none'
          >
            <option value='title'>Título</option>
            <option value='author'>Autor</option>
            <option value='subject'>Assunto</option>
          </Select>
        </Box>
      </Flex>
      <Flex justifyContent='center'>
        <Box
          width='650px'
          height='600px'
          overflowY='scroll'
          __css={{
            '&::-webkit-scrollbar': {
              width: '5px',
            },

            '&::-webkit-scrollbar-track': {
              background: 'blue.50',
            },

            '&::-webkit-scrollbar-thumb': {
              background: 'blue.200',
            },

            '&::-webkit-scrollbar-thumb:hover': {
              background: '#555',
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
                      <Text>Note: {item.note}</Text>
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
                    backgroundColor='blue.400'
                    color='white'
                    fontWeight='bold'
                  >
                    <Text fontSize='xl' textTransform='uppercase'>
                      Numeração
                    </Text>
                    <Text fontSize='3xl'>{item.number}</Text>
                  </Box>
                </Flex>
              );
            })}
        </Box>
      </Flex>
    </Flex>
  );
};
