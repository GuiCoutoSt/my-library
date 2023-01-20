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
      height='fit-content'
      padding='0 2px'
      borderRadius='5px'
      textDecoration='underline'
      _hover={{
        textDecoration: 'none',
        backgroundColor: 'blue.100',
      }}
    >
      {innerText}
    </Link>
  );
};
