import { Link as RouterDom } from 'react-router-dom';

import { Link } from '@chakra-ui/react';

interface IHeaderLink {
  url: string;
  innerText: string;
}

export const HeaderLink = ({ url, innerText }: IHeaderLink) => {
  return (
    <Link
      as={RouterDom}
      to={url}
      padding='0 2px'
      borderRadius='5px'
      _hover={{
        textDecoration: 'none',
        backgroundColor: 'blue.100',
        transform: 'translateY(5px)',
      }}
    >
      {innerText}
    </Link>
  );
};
