import { Link as RouterDom } from 'react-router-dom';

import { Link } from '@chakra-ui/react';

interface IHomeHeader {
  url: string;
  innerText: string;
}

export const HomeLink = ({ url, innerText }: IHomeHeader) => {
  return (
    <Link
      as={RouterDom}
      to={url}
      margin='5px 0'
      border='1px solid transparent'
      padding='2px 4px'
      borderRadius='5px'
      fontSize='lg'
      backgroundColor='blue.100'
      _hover={{
        transform: 'translateY(-2px)',
        textDecoration: 'none',
        backgroundColor: 'white',
        borderColor: 'blue.100',
      }}
    >
      {innerText}
    </Link>
  );
};
