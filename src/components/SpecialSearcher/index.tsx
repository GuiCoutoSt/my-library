import { Box, Button, Flex, Input, Select, Text } from '@chakra-ui/react';

// data
import { all_data } from '../../data/.all-data';

// types
import { BookData, BookDataArray } from '../../types/types';

// utils
import { defineSearchType } from '../../utils/defineSearchType';
import { bookFinder } from '../../utils/bookFinder';

interface ISearcher {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  setResults: React.Dispatch<React.SetStateAction<BookDataArray>>;
}

export const SpecialSearcher = ({
  search,
  setSearch,
  query,
  setQuery,
  setResults,
}: ISearcher) => {
  const changeSearch = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSearch(event.target.value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleClick = () => {
    handleSearch(query);
  };

  const handleSearch = (query: string) => {
    setResults(
      all_data.filter((book: BookData) => bookFinder(book, search, query))
    );
  };

  const clearSearch = () => {
    setResults([]);
  };

  return (
    <Box
      width='100%'
      padding='20px'
      border='1px solid'
      borderRadius='5px'
      boxShadow='0 2px 0 0'
      backgroundColor='#fefae0'
    >
      <Text marginBottom='10px'>
        Pesquisando por{' '}
        <Text
          as='strong'
          padding='2px'
          border='1px solid'
          borderRadius='5px'
          boxShadow='1px 1px 0 0'
          fontFamily='monospace'
          fontSize='lg'
          backgroundColor='white'
        >
          {defineSearchType(search)}
        </Text>
      </Text>
      <Flex margin='1rem 0'>
        <Box flexGrow='1'>
          <Input
            placeholder={`Digite um ${defineSearchType(search)}...`}
            className={'input'}
            onChange={handleChange}
            value={query}
            borderColor='black'
            borderRadius='none'
            backgroundColor='white'
            fontFamily='monospace'
            fontStyle='italic'
            _hover={{ outline: 'none' }}
            _focus={{
              border: 'none',
              outline: 'none',
            }}
          />
        </Box>
        <Box>
          <Select
            value={search}
            onChange={changeSearch}
            borderColor='black'
            borderRadius='none'
            borderLeftRadius='none'
            borderLeft='none'
            fontFamily='monospace'
            backgroundColor='white'
            _hover={{ outline: 'none', cursor: 'pointer' }}
            _focus={{ border: 'none' }}
          >
            <option value='title'>Título</option>
            <option value='author'>Autor</option>
            <option value='subject'>Assunto</option>
          </Select>
        </Box>
      </Flex>
      <Flex>
        <Button
          onClick={handleClick}
          height='fit-content'
          marginRight='1rem'
          padding='0.6rem'
          border='1px solid black'
          borderColor='green.500'
          backgroundColor='green.300'
          color='white'
          _hover={{
            border: '1px solid',
            backgroundColor: 'white',
            color: 'green.500',
          }}
        >
          Buscar
        </Button>
        <Button
          onClick={clearSearch}
          height='fit-content'
          padding='0.6rem'
          border='1px solid'
          borderColor='red.500'
          backgroundColor='red.300'
          color='white'
          _hover={{
            border: '1px solid',
            backgroundColor: 'white',
            color: 'red.500',
          }}
        >
          Limpar busca
        </Button>
      </Flex>
    </Box>
  );
};
