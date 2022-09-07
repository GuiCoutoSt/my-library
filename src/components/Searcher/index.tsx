import { Box, Flex, Input, Select, Text } from '@chakra-ui/react';

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
            backgroundColor='blue.300'
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
        <Select value={search} onChange={changeSearch} borderLeftRadius='none'>
          <option value='title'>Título</option>
          <option value='author'>Autor</option>
          <option value='subject'>Assunto</option>
        </Select>
      </Box>
    </Flex>
  );
};
