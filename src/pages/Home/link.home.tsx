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
      width='max-content'
      border='1px solid'
      padding='2px 4px'
      borderRadius='5px'
      color='black'
      _hover={{
        transform: 'translate(-2px, -2px)',
        textDecoration: 'none',
        backgroundColor: 'white',
        boxShadow: '2px 2px 0 0 black',
      }}
    >
      {innerText}
    </Link>
  );
};
