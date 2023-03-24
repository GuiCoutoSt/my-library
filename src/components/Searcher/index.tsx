import { Box, Flex, Input, Select, Text } from '@chakra-ui/react';

// utils
import { defineSearchType } from '../../utils/defineSearchType';

interface ISearcher {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

export const Searcher = ({ search, setSearch, query, setQuery }: ISearcher) => {
  const changeSearch = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Flex
      width='100%'
      justifyContent='space-between'
      alignItems='flex-end'
      padding='20px'
      border='1px solid'
      borderRadius='5px'
      boxShadow='0 2px 0 0'
      backgroundColor='#fefae0'
    >
      <Box flexGrow='1'>
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
        <Input
          placeholder={`Digite um ${defineSearchType(search)}...`}
          className={'input'}
          onChange={(event) => setQuery(event.target.value)}
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
  );
};
